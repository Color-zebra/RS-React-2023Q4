import React, { Component } from 'react';

export default class FallBackPage extends Component {
  render() {
    console.log('I was rendered');
    return <div>I&apos;m fallback interface</div>;
  }
}
