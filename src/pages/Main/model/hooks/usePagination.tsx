import { useState } from 'react';

export const usePagination = () => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  return { currPage, setCurrPage, lastPage, setLastPage, limit, setLimit };
};
