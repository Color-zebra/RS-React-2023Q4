import { useContext } from 'react';
import { RootButton } from '../../../shared/ui/RootButton';
import { RootTextField } from '../../../shared/ui/RootTextField';
import classes from './Pagination.module.scss';
import { PaginationContext } from '../../../app/providers/ContextProvider/model/contexts/PaginationContext';
import { PaginationActionKinds } from '../../../app/providers/ContextProvider/model/types';
import { useSearchParams } from 'react-router-dom';

export const Pagination = () => {
  const {
    state: { currPage, lastPage },
    dispatch,
  } = useContext(PaginationContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const prevPage = () => {
    dispatch({
      type: PaginationActionKinds.SET_CURR,
      payload: currPage - 1,
    });
    searchParams.set('page', `${currPage - 1}`);
    setSearchParams(searchParams);
  };

  const nextPage = () => {
    dispatch({
      type: PaginationActionKinds.SET_CURR,
      payload: currPage + 1,
    });
    searchParams.set('page', `${currPage + 1}`);
    setSearchParams(searchParams);
  };

  return (
    <div className={classes.pagination}>
      <RootButton disabled={currPage <= 1} onClick={prevPage}>
        &lt;
      </RootButton>
      <RootTextField>{currPage}</RootTextField>
      <RootButton
        disabled={currPage >= lastPage}
        onClick={() => nextPage()}
        data-testid="next-page-button"
      >
        &gt;
      </RootButton>
    </div>
  );
};
