import React from 'react';
import { CharactersProvider } from './model/providers/CharactersProvider';
import { SearchProvider } from './model/providers/SearchProvider';
import { PaginationProvider } from './model/providers/PaginationProvider';

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <CharactersProvider>
      <SearchProvider>
        <PaginationProvider>{children}</PaginationProvider>
      </SearchProvider>
    </CharactersProvider>
  );
};
