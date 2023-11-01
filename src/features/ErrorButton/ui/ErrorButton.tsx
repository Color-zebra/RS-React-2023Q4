import { useState } from 'react';
import { RootButton } from '../../../shared/ui/RootButton';
import classes from './ErrorButton.module.scss';

const ErrorButton = () => {
  const [isError, setIsError] = useState<boolean>(false);

  const onClick = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error('Ашипка!');
  }

  return (
    <RootButton className={classes.red} onClick={onClick}>
      Throw an error
    </RootButton>
  );
};

export default ErrorButton;
