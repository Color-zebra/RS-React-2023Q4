import { ButtonHTMLAttributes, Component } from 'react';
import classNames from '../../../utils/classNames';
import classes from './RootButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default class RootButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { children, className, ...other } = this.props;
    return (
      <button
        type="button"
        className={classNames(classes.base, className)}
        {...other}
      >
        {children}
      </button>
    );
  }
}
