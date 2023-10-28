import React, { Component, ReactNode } from 'react';
import { Character } from '../../../shared/types/types';
import { CharactersAPI } from '../../../shared/api/RickAndMorty/Characters';
import Content from '../../../widgets/Content/ui/Content';

type Props = {
  children?: ReactNode;
};

type State = {
  characters: Character[];
  isReady: boolean;
};

export default class MainPage extends Component<Props, State> {
  API: CharactersAPI;

  constructor(props: Props) {
    super(props);
    this.state = {
      characters: [],
      isReady: false,
    };
    this.API = CharactersAPI.getInstance();
  }

  async componentDidMount(): Promise<void> {
    const characters = await this.API.getCharacters();
    this.setState({
      characters,
      isReady: true,
    });
  }

  render() {
    return (
      <>
        <Content {...this.state} />
      </>
    );
  }
}
