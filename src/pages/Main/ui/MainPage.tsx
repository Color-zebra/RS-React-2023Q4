import React, { Component, ReactNode } from 'react';
import { Character } from '../../../shared/types/types';
import { CharactersAPI } from '../../../shared/api/RickAndMorty/Characters';
import Content from '../../../widgets/Content/ui/Content';
import { Header } from '../../../widgets/Header';
import hashLSKey from '../../../shared/utils/hashLocalStorageKey';

type Props = {
  children?: ReactNode;
};

type State = {
  characters: Character[];
  isReady: boolean;
  searchParam: string;
};

export default class MainPage extends Component<Props, State> {
  API: CharactersAPI;

  constructor(props: Props) {
    super(props);
    this.state = {
      characters: [],
      isReady: false,
      searchParam: localStorage.getItem(hashLSKey('searchParam')) || '',
    };
    this.API = CharactersAPI.getInstance();

    this.changeSearchParams = this.changeSearchParams.bind(this);
  }

  async componentDidMount(): Promise<void> {
    const { searchParam } = this.state;
    const characters = await this.API.getCharacters(searchParam);
    this.setState({
      characters,
      isReady: true,
    });
  }

  async componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): Promise<void> {
    if (prevState.searchParam !== this.state.searchParam) {
      this.setState({ isReady: false, characters: [] });
      const { searchParam } = this.state;
      const characters = await this.API.getCharacters(searchParam);
      this.setState({
        characters,
        isReady: true,
      });
    }
  }

  changeSearchParams(newParam: string) {
    localStorage.setItem(hashLSKey('searchParam'), newParam);
    this.setState({ searchParam: newParam });
  }

  render() {
    const { characters, isReady, searchParam } = this.state;
    return (
      <>
        <Header
          onSearchPress={this.changeSearchParams}
          searchParam={searchParam}
        />
        <Content characters={characters} isReady={isReady} />
      </>
    );
  }
}
