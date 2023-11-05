import React from 'react';
import classes from './RootTextField.module.scss';

export const RootTextField = (props: React.PropsWithChildren) => {
  return <div className={classes.field}>{props.children}</div>;
};
