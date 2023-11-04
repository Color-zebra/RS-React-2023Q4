import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = () => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetCurrPage = useCallback(
    (pageNumber: number) => {
      setCurrPage(pageNumber);
      searchParams.set('page', String(pageNumber));
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const handleSetLimit = useCallback(
    (pageSize: number) => {
      setLimit(pageSize);
      setCurrPage(1);
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return {
    currPage,
    setCurrPage: handleSetCurrPage,
    lastPage,
    setLastPage,
    limit,
    setLimit: handleSetLimit,
  };
};
