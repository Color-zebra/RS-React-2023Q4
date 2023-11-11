import React, { useReducer } from 'react';
import { searchReducer } from '../reducers/SearchReducer';
import { SearchContext } from '../contexts/SearchContext';
import hashLSKey from '../../../../../shared/utils/hashLocalStorageKey';

export const SearchProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(searchReducer, {
    searchTerm: localStorage.getItem(hashLSKey('searchParam')) || '',
  });

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
