import React, { Component, ReactNode } from 'react';
import { Character } from '../../../shared/types/types';
import { CharactersAPI } from '../../../shared/api/RickAndMorty/Characters';

type Props = {
  children?: ReactNode;
};

type State = {
  characters: Character[];
};

export default class MainPage extends Component<Props, State> {
  API: CharactersAPI;

  constructor(props: Props) {
    super(props);
    this.state = {
      characters: [],
    };
    this.API = CharactersAPI.getInstance();
  }

  async componentDidMount(): Promise<void> {
    const characters = await this.API.getCharacters();
    this.setState({
      characters,
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        {this.state.characters ? JSON.stringify(this.state.characters) : ''}
      </div>
    );
  }
}
