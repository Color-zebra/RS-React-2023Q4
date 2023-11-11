import { useCallback, useContext, useEffect, useState } from 'react';
import { CharactersAPI } from '../../../../shared/api/RickAndMorty/Characters';
import hashLSKey from '../../../../shared/utils/hashLocalStorageKey';
import { usePagination } from './usePagination';
import { SearchContext } from '../../../../app/providers/ContextProvider/model/contexts/SearchContext';
import { CharactersContext } from '../../../../app/providers/ContextProvider/model/contexts/CharactersContext';
import { CharactersActionKinds } from '../../../../app/providers/ContextProvider/model/types';

export const useMainPage = () => {
  const {
    state: { searchTerm },
  } = useContext(SearchContext);
  const { dispatch } = useContext(CharactersContext);
  const Api = CharactersAPI.getInstance();

  const [isReady, setIsReady] = useState<boolean>(false);

  const { currPage, setCurrPage, lastPage, setLastPage, limit, setLimit } =
    usePagination();

  useEffect(() => {
    localStorage.setItem(hashLSKey('searchParam'), searchTerm);
    setCurrPage(1);
  }, [searchTerm, setCurrPage]);

  const getCharacters = useCallback(async () => {
    setIsReady(false);
    const answer = await Api.getCharacters({
      searchParam: searchTerm,
      page: currPage,
      limit: limit,
    });

    dispatch({ type: CharactersActionKinds.SET, payload: answer.characters });
    setCurrPage(answer.page);
    setLastPage(Math.floor(answer.records / limit));
    setIsReady(true);
  }, [Api, currPage, dispatch, limit, searchTerm, setCurrPage, setLastPage]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return {
    isReady,
    currPage,
    lastPage,
    setCurrPage,
    limit,
    setLimit,
  };
};
