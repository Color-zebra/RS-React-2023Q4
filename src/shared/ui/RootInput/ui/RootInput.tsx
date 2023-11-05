import { InputHTMLAttributes } from 'react';
import classNames from '../../../utils/classNames';
import classes from './RootInput.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const RootInput = (props: Props) => {
  const { className, ...other } = props;
  return (
    <input className={classNames(classes.base, className)} {...other}></input>
  );
};

export default RootInput;
