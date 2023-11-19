import { ChangeEvent, KeyboardEvent, useState, useEffect } from 'react';
import { ErrorButton } from '../../../features/ErrorButton';
import { RootButton } from '../../../shared/ui/RootButton';
import { RootInput } from '../../../shared/ui/RootInput';
import classes from './Header.module.scss';
import img from '../../../shared/assets/images/back.jpeg';
import hashLSKey from '../../../shared/utils/hashLocalStorageKey';
import { useSearchParams } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/store/hooks/hooks';
import {
  setCurrPage,
  setSearchTerm,
} from '../../../shared/store/reducers/appSlice';

const Header = () => {
  const { searchTerm } = useAppSelector((store) => store.appSliceReducer);

  const dispatch = useAppDispatch();
  const [searchParam, setSearchParam] = useState<string>(searchTerm);
  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    const savedValue = localStorage.getItem(hashLSKey('searchParam'));
    if (savedValue && savedValue !== searchTerm) {
      setSearchParam(savedValue);
    }
  }, [searchTerm]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const submitInput = (value: string) => {
    const trimed = value.trim();
    dispatch(setCurrPage(1));
    queryParams.set('page', '1');
    setQueryParams(queryParams);
    localStorage.setItem(hashLSKey('searchParam'), trimed);
    dispatch(setSearchTerm(trimed));
    setSearchParam(trimed);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitInput(searchParam);
    }
  };

  return (
    <header
      className={classes.header}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={classes.container}>
        <ErrorButton />
        <div>
          <RootInput
            value={searchParam}
            onChange={onInputChange}
            onKeyDown={onKeyPress}
            data-testid="search-input"
          />
          <RootButton
            onClick={() => submitInput(searchParam)}
            data-testid="search-submit-button"
          >
            Search
          </RootButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
