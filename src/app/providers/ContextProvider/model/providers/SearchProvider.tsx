import React, { useReducer } from 'react';
import { searchReducer } from '../reducers/SearchReducer';
import { SearchContext } from '../contexts/SearchContext';

export const SearchProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(searchReducer, { searchTerm: '' });

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
