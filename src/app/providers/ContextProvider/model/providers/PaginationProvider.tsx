import React, { useReducer } from 'react';
import { PaginationContext } from '../contexts/PaginationContext';
import { paginationReducer } from '../reducers/PaginationReducer';

export const PaginationProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(paginationReducer, {
    currPage: 1,
    lastPage: 1,
  });
  return (
    <PaginationContext.Provider value={{ state, dispatch }}>
      {children}
    </PaginationContext.Provider>
  );
};
