import { ButtonHTMLAttributes } from 'react';
import classNames from '../../../utils/classNames';
import classes from './RootButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const RootButton = (props: Props) => {
  const { children, className, ...other } = props;
  return (
    <button
      type="button"
      className={classNames(classes.base, className)}
      {...other}
    >
      {children}
    </button>
  );
};

export default RootButton;
