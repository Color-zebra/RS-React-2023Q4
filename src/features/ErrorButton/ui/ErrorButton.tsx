import { Component, ReactNode } from 'react';
import { RootButton } from '../../../shared/ui/RootButton';
import classes from './ErrorButton.module.scss';

type Props = {
  children?: ReactNode;
};
type State = {
  isError: boolean;
};

export default class ErrorButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  onClick = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error('Ашипка!');
    }
    return (
      <RootButton className={classes.red} onClick={this.onClick}>
        Throw an error
      </RootButton>
    );
  }
}
