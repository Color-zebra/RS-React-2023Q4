import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import { ErrorButton } from '../../../features/ErrorButton';
import { RootButton } from '../../../shared/ui/RootButton';
import { RootInput } from '../../../shared/ui/RootInput';
import classes from './Header.module.scss';
import img from '../../../shared/assets/images/back.jpeg';
import { SearchContext } from '../../../app/providers/ContextProvider/model/contexts/SearchContext';
import {
  PaginationActionKinds,
  SearchActionKinds,
} from '../../../app/providers/ContextProvider/model/types';
import hashLSKey from '../../../shared/utils/hashLocalStorageKey';
import { PaginationContext } from '../../../app/providers/ContextProvider/model/contexts/PaginationContext';
import { useSearchParams } from 'react-router-dom';

const Header = () => {
  const {
    state: { searchTerm },
    dispatch,
  } = useContext(SearchContext);
  const { dispatch: PaginationDispatch } = useContext(PaginationContext);
  const [searchParam, setSearchParam] = useState<string>(searchTerm);
  const [queryParams, setQueryParams] = useSearchParams();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const submitInput = (value: string) => {
    const trimed = value.trim();
    dispatch({ type: SearchActionKinds.SET, payload: trimed });
    PaginationDispatch({ type: PaginationActionKinds.SET_CURR, payload: 1 });
    queryParams.set('page', '1');
    setQueryParams(queryParams);
    localStorage.setItem(hashLSKey('searchParam'), trimed);
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
