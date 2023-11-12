import { Dispatch, createContext } from 'react';
import { SearchAction, SearchState } from '../types';

type SearchContextState = {
  state: SearchState;
  dispatch: Dispatch<SearchAction>;
};

const initialState: SearchContextState = {
  state: {
    searchTerm: '',
  },
  dispatch: () => {
    throw new Error('You should wrap your app with CharactersContext provider');
  },
};

export const SearchContext = createContext(initialState);
