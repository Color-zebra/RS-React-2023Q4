import React from 'react';
import classes from './RootTextField.module.scss';

export const RootTextField = (props: React.PropsWithChildren) => {
  return (
    <div data-testid="page-number" className={classes.field}>
      {props.children}
    </div>
  );
};
