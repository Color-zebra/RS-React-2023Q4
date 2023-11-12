import { Dispatch, createContext } from 'react';
import { CharactersAction, CharactersState } from '../types';

type CharactersContextState = {
  state: CharactersState;
  dispatch: Dispatch<CharactersAction>;
};

const initialState: CharactersContextState = {
  state: {
    characters: [],
  },
  dispatch: () => {
    throw new Error('You should wrap your app with CharactersContext provider');
  },
};

export const CharactersContext =
  createContext<CharactersContextState>(initialState);
