import React, { Component } from 'react';
import './styles/styles.scss';
import { ErrorButton } from '../features/ErrorButton';
import RootInput from '../shared/ui/RootInput/ui/RootInput';
import { RootButton } from '../shared/ui/RootButton';
import { MainPage } from '../pages/Main';

export default class App extends Component {
  onClick = () => {
    throw new Error('Ашипка');
  };
  render() {
    return (
      <>
        <div>App</div>
        <ErrorButton />
        <RootInput />
        <RootButton>Search</RootButton>
        <MainPage />
      </>
    );
  }
}
