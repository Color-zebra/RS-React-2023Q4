import classes from './Dropdown.module.scss';
import { useSearchParams } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/store/hooks/hooks';
import {
  setCurrPage,
  setItemsPerPage,
} from '../../../shared/store/reducers/appSlice';

export const Dropdown = () => {
  const { itemsPerPage: limit } = useAppSelector(
    (store) => store.appSliceReducer
  );
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const setLimit = (val: number) => {
    dispatch(setItemsPerPage(val));
    dispatch(setCurrPage(1));
    searchParams.set('page', `1`);
    setSearchParams(searchParams);
  };

  return (
    <div className={classes.wrapper}>
      <h3>Elements per page</h3>
      <select
        className={classes.dropdown}
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        data-testid="card-per-page-selector"
      >
        <option className={classes.item} value="6">
          6
        </option>
        <option className={classes.item} value="12">
          12
        </option>
        <option className={classes.item} value="18">
          18
        </option>
        <option className={classes.item} value="24">
          24
        </option>
      </select>
    </div>
  );
};
