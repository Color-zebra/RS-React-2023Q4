import { useCallback, useEffect, useState } from 'react';
import { CharacterAttributes } from '../../../../shared/types/types';
import { CharactersAPI } from '../../../../shared/api/HarryPotter/Characters';
import hashLSKey from '../../../../shared/utils/hashLocalStorageKey';
import { usePagination } from './usePagination';

export const useMainPage = () => {
  const Api = CharactersAPI.getInstance();
  const initSearchParam = localStorage.getItem(hashLSKey('searchParam')) || '';

  const [characters, setCharacters] = useState<CharacterAttributes[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [searchParam, setSearchParam] = useState(initSearchParam);

  const { currPage, setCurrPage, lastPage, setLastPage, limit, setLimit } =
    usePagination();

  const changeSearchParams = (newParam: string) => {
    localStorage.setItem(hashLSKey('searchParam'), newParam);
    setCurrPage(1);
    setSearchParam(newParam);
  };

  const getCharacters = useCallback(async () => {
    setIsReady(false);
    const answer = await Api.getCharacters({
      searchParam: searchParam,
      page: currPage,
      limit: limit,
    });

    setCharacters(answer.characters);
    setCurrPage(answer.page);
    setLastPage(Math.ceil(answer.records / limit));
    setIsReady(true);
  }, [Api, currPage, limit, searchParam, setCurrPage, setLastPage]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return {
    searchParam,
    changeSearchParams,
    characters,
    isReady,
    currPage,
    lastPage,
    setCurrPage,
    limit,
    setLimit,
  };
};
