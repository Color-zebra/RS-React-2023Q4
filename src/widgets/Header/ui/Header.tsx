import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import { ErrorButton } from '../../../features/ErrorButton';
import { RootButton } from '../../../shared/ui/RootButton';
import { RootInput } from '../../../shared/ui/RootInput';
import classes from './Header.module.scss';
import img from '../../../shared/assets/images/back.jpeg';
import { SearchContext } from '../../../app/providers/ContextProvider/model/contexts/SearchContext';
import { SearchActionKinds } from '../../../app/providers/ContextProvider/model/types';

const Header = () => {
  const {
    state: { searchTerm },
    dispatch,
  } = useContext(SearchContext);
  const [searchParam, setSearchParam] = useState<string>(searchTerm);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const submitInput = (value: string) => {
    const trimed = value.trim();
    dispatch({ type: SearchActionKinds.SET, payload: trimed });
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
          />
          <RootButton onClick={() => submitInput(searchParam)}>
            Search
          </RootButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
