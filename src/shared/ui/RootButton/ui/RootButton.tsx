import { ButtonHTMLAttributes, Component } from 'react';
import classNames from '../../../utils/classNames';
import s from './RootButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

type State = {
  isError: boolean;
};

export default class RootButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { children, className, ...other } = this.props;
    return (
      <button
        type="button"
        className={classNames(s.base, className)}
        {...other}
      >
        {children}
      </button>
    );
  }
}
