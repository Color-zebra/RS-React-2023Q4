import { Component, ReactNode } from 'react';

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
    return <button onClick={this.onClick}>Throw an error</button>;
  }
}
