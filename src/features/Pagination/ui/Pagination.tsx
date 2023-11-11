import { useContext } from 'react';
import { RootButton } from '../../../shared/ui/RootButton';
import { RootTextField } from '../../../shared/ui/RootTextField';
import classes from './Pagination.module.scss';
import { PaginationContext } from '../../../app/providers/ContextProvider/model/contexts/PaginationContext';
import { PaginationActionKinds } from '../../../app/providers/ContextProvider/model/types';

export const Pagination = () => {
  const {
    state: { currPage, lastPage },
    dispatch,
  } = useContext(PaginationContext);

  return (
    <div className={classes.pagination}>
      <RootButton
        disabled={currPage <= 1}
        onClick={() =>
          dispatch({
            type: PaginationActionKinds.SET_CURR,
            payload: currPage - 1,
          })
        }
      >
        &lt;
      </RootButton>
      <RootTextField>{currPage}</RootTextField>
      <RootButton
        disabled={currPage >= lastPage}
        onClick={() =>
          dispatch({
            type: PaginationActionKinds.SET_CURR,
            payload: currPage + 1,
          })
        }
      >
        &gt;
      </RootButton>
    </div>
  );
};
