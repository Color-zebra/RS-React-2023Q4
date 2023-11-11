import { useCallback, useContext, useEffect, useState } from 'react';
import { CharactersAPI } from '../../../../shared/api/RickAndMorty/Characters';
import hashLSKey from '../../../../shared/utils/hashLocalStorageKey';
import { usePagination } from './usePagination';
import { SearchContext } from '../../../../app/providers/ContextProvider/model/contexts/SearchContext';
import { CharactersContext } from '../../../../app/providers/ContextProvider/model/contexts/CharactersContext';
import {
  CharactersActionKinds,
  PaginationActionKinds,
} from '../../../../app/providers/ContextProvider/model/types';
import { PaginationContext } from '../../../../app/providers/ContextProvider/model/contexts/PaginationContext';

export const useMainPage = () => {
  const {
    state: { searchTerm },
  } = useContext(SearchContext);
  const { dispatch: CharactersDispatch } = useContext(CharactersContext);
  const {
    state: { currPage, lastPage },
    dispatch: PaginationDispatch,
  } = useContext(PaginationContext);
  const Api = CharactersAPI.getInstance();

  const [isReady, setIsReady] = useState<boolean>(false);

  const { limit, setLimit } = usePagination();

  useEffect(() => {
    localStorage.setItem(hashLSKey('searchParam'), searchTerm);
    PaginationDispatch({ type: PaginationActionKinds.SET_CURR, payload: 1 });
  }, [PaginationDispatch, searchTerm]);

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
    searchTerm,
    currPage,
    limit,
    CharactersDispatch,
    PaginationDispatch,
  ]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return {
    isReady,
    currPage,
    lastPage,
    // setCurrPage,
    limit,
    setLimit,
  };
};
