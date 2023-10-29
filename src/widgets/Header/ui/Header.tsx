import { ChangeEvent, Component, KeyboardEvent } from 'react';
import { ErrorButton } from '../../../features/ErrorButton';
import RootInput from '../../../shared/ui/RootInput/ui/RootInput';
import { RootButton } from '../../../shared/ui/RootButton';
import classes from './Header.module.scss';
import img from '../../../shared/assets/images/back.jpeg';

type Props = {
  onSearchPress: (val: string) => void;
  searchParam: string;
};

type State = {
  inputValue: string;
};

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: this.props.searchParam,
    };
  }

  onInputChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.target.value });
  }

  onKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.submitInput(this.state.inputValue);
    }
  }

  submitInput(value: string) {
    this.props.onSearchPress(value);
    this.setState((prev) => {
      return { inputValue: prev.inputValue.trim() };
    });
  }

  render() {
    return (
      <div
        className={classes.header}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={classes.container}>
          <ErrorButton />
          <div>
            <RootInput
              value={this.state.inputValue}
              onChange={(e) => this.onInputChange(e)}
              onKeyDown={(e) => this.onKeyPress(e)}
            />
            <RootButton onClick={() => this.submitInput(this.state.inputValue)}>
              Search
            </RootButton>
          </div>
        </div>
      </div>
    );
  }
}
