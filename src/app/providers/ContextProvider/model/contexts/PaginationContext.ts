import { Dispatch, createContext } from 'react';
import { PaginationAction, PaginationState } from '../types';

type PaginataionContextState = {
  state: PaginationState;
  dispatch: Dispatch<PaginationAction>;
};

const initialState: PaginataionContextState = {
  state: {
    currPage: 1,
    lastPage: 1,
    limit: 6,
  },
  dispatch: () => {
    throw new Error('You should wrap your app with PaginationContext provider');
  },
};

export const PaginationContext = createContext(initialState);
