import { Component, InputHTMLAttributes } from 'react';
import classNames from '../../../utils/classNames';
import classes from './RootInput.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default class RootInput extends Component<Props> {
  render() {
    const { className, ...other } = this.props;
    return (
      <input className={classNames(classes.base, className)} {...other}></input>
    );
  }
}
