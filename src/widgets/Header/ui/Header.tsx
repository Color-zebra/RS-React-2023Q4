import { ChangeEvent, Component } from 'react';
import { ErrorButton } from '../../../features/ErrorButton';
import RootInput from '../../../shared/ui/RootInput/ui/RootInput';
import { RootButton } from '../../../shared/ui/RootButton';

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
  render() {
    return (
      <div>
        <ErrorButton />
        <div>
          <RootInput
            value={this.state.inputValue}
            onChange={(e) => this.onInputChange(e)}
          />
          <RootButton
            onClick={() => this.props.onSearchPress(this.state.inputValue)}
          >
            Search
          </RootButton>
        </div>
      </div>
    );
  }
}
