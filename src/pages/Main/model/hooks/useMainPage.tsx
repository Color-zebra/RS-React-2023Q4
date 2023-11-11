import { useCallback, useContext, useEffect, useState } from 'react';
import { CharacterAttributes } from '../../../../shared/types/types';
import { CharactersAPI } from '../../../../shared/api/RickAndMorty/Characters';
import hashLSKey from '../../../../shared/utils/hashLocalStorageKey';
import { usePagination } from './usePagination';
import { SearchContext } from '../../../../app/providers/ContextProvider/model/contexts/SearchContext';

export const useMainPage = () => {
  const {
    state: { searchTerm },
  } = useContext(SearchContext);
  const Api = CharactersAPI.getInstance();

  const [characters, setCharacters] = useState<CharacterAttributes[]>([]);
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

    setCharacters(answer.characters);
    setCurrPage(answer.page);
    setLastPage(Math.floor(answer.records / limit));
    setIsReady(true);
  }, [Api, currPage, limit, searchTerm, setCurrPage, setLastPage]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return {
    characters,
    isReady,
    currPage,
    lastPage,
    setCurrPage,
    limit,
    setLimit,
  };
};
