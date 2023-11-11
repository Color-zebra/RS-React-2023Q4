import React from 'react';
import { CharactersProvider } from './model/providers/CharactersProvider';
import { SearchProvider } from './model/providers/SearchProvider';

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <CharactersProvider>
      <SearchProvider>{children}</SearchProvider>
    </CharactersProvider>
  );
};
