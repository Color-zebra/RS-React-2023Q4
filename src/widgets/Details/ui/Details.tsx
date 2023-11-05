import { useParams } from 'react-router-dom';
import classes from './Details.module.scss';

import React from 'react';

export const Details = () => {
  const { id } = useParams();
  return <div className={classes.wrapper}>{id}</div>;
};
