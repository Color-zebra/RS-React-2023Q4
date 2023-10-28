import React, { Component } from 'react';
import './styles/styles.scss';
import { ErrorButton } from '../features/ErrorButton';

export default class App extends Component {
  onClick = () => {
    throw new Error('Ашипка');
  };
  render() {
    return (
      <>
        <div>App</div>
        <ErrorButton />
      </>
    );
  }
}
