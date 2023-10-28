import React, { Component } from 'react';
import { RootButton } from '../../../shared/ui/RootButton';
import classes from './FallBackPage.module.scss';
import img from '../../../shared/assets/images/fallback-back.jpg';

export default class FallBackPage extends Component {
  updatePage() {
    location.reload();
  }
  render() {
    return (
      <div className={classes.page} style={{ backgroundImage: `url(${img})` }}>
        <div className={classes.content}>
          <p>Looks like everything is broken :&#40;</p>
          <RootButton onClick={this.updatePage}>Update page</RootButton>
        </div>
      </div>
    );
  }
}
