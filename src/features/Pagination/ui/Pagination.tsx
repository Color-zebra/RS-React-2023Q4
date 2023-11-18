import { RootButton } from '../../../shared/ui/RootButton';
import { RootTextField } from '../../../shared/ui/RootTextField';
import classes from './Pagination.module.scss';
import { useSearchParams } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/store/hooks/hooks';
import { setCurrPage } from '../../../shared/store/reducers/appSlice';

export const Pagination = () => {
  const { currPage, lastPage } = useAppSelector(
    (store) => store.appSliceReducer
  );
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const prevPage = () => {
    dispatch(setCurrPage(currPage - 1));
    searchParams.set('page', `${currPage - 1}`);
    setSearchParams(searchParams);
  };

  const nextPage = () => {
    dispatch(setCurrPage(currPage + 1));
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
