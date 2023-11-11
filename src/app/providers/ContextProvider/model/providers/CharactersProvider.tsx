import React, { useReducer } from 'react';
import { CharactersContext } from '../contexts/CharactersContext';
import { charactersReducer } from '../reducers/CharactersReducer';

export const CharactersProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(charactersReducer, {
    characters: [],
  });
  return (
    <CharactersContext.Provider value={{ state, dispatch }}>
      {children}
    </CharactersContext.Provider>
  );
};
