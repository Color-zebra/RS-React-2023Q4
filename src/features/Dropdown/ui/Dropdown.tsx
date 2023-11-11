import { useContext } from 'react';
import classes from './Dropdown.module.scss';
import { PaginationContext } from '../../../app/providers/ContextProvider/model/contexts/PaginationContext';
import { PaginationActionKinds } from '../../../app/providers/ContextProvider/model/types';
import { useSearchParams } from 'react-router-dom';

export const Dropdown = () => {
  const {
    state: { limit },
    dispatch,
  } = useContext(PaginationContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const setLimit = (val: number) => {
    dispatch({ type: PaginationActionKinds.SET_LIMIT, payload: val });
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
