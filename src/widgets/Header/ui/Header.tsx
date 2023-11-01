import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { ErrorButton } from '../../../features/ErrorButton';
import RootInput from '../../../shared/ui/RootInput/ui/RootInput';
import { RootButton } from '../../../shared/ui/RootButton';
import classes from './Header.module.scss';
import img from '../../../shared/assets/images/back.jpeg';

type Props = {
  onSearchPress: (val: string) => void;
  searchParam: string;
};

const Header = (props: Props) => {
  const { searchParam: initialSearchParam, onSearchPress } = props;

  const [searchParam, setSearchParam] = useState<string>(initialSearchParam);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const submitInput = (value: string) => {
    const trimed = value.trim();
    onSearchPress(trimed);
    setSearchParam(trimed);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitInput(searchParam);
    }
  };

  return (
    <div className={classes.header} style={{ backgroundImage: `url(${img})` }}>
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
    </div>
  );
};

export default Header;
