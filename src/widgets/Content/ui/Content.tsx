import { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { CharacterCard } from '../../../entities/CharacterCard';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import classes from './Content.module.scss';
import { NothingFound } from '../../../entities/NothingFound';
import { CharactersContext } from '../../../app/providers/ContextProvider/model/contexts/CharactersContext';
import {
  CharactersActionKinds,
  PaginationActionKinds,
} from '../../../app/providers/ContextProvider/model/types';
import { PaginationContext } from '../../../app/providers/ContextProvider/model/contexts/PaginationContext';
import { CharactersAPI } from '../../../shared/api/RickAndMorty/Characters';
import { SearchContext } from '../../../app/providers/ContextProvider/model/contexts/SearchContext';
import { Pagination } from '../../../features/Pagination';
import { Outlet } from 'react-router-dom';

const Content = () => {
  const {
    state: { searchTerm },
  } = useContext(SearchContext);
  const {
    state: { characters },
    dispatch: CharactersDispatch,
  } = useContext(CharactersContext);
  const {
    state: { currPage, limit },
    dispatch: PaginationDispatch,
  } = useContext(PaginationContext);

  const Api = CharactersAPI.getInstance();
  const [isReady, setIsReady] = useState<boolean>(false);

  const getCharacters = useCallback(async () => {
    setIsReady(false);
    const answer = await Api.getCharacters({
      searchParam: searchTerm,
      page: currPage,
      limit: limit,
    });
    CharactersDispatch({
      type: CharactersActionKinds.SET,
      payload: answer.characters,
    });
    PaginationDispatch({
      type: PaginationActionKinds.SET_CURR,
      payload: answer.page,
    });
    PaginationDispatch({
      type: PaginationActionKinds.SET_LAST,
      payload: Math.floor(answer.records / limit),
    });
    setIsReady(true);
  }, [
    Api,
    CharactersDispatch,
    PaginationDispatch,
    currPage,
    limit,
    searchTerm,
  ]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);
  let res: ReactNode;

  if (characters && characters.length !== 0) {
    res = (
      <div className={classes.layout}>
        {characters.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
    );
  } else {
    res = <NothingFound />;
  }

  return (
    <>
      {isReady ? (
        <>
          {res}
          <Outlet />
          <Pagination />
        </>
      ) : (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Content;
