import { Component } from 'react';
import classes from './NothingFound.module.scss';
import img from '../../../shared/assets/images/nothing-found.jpg';

export default class NothingFound extends Component {
  render() {
    return (
      <div className={classes.container}>
        <img className={classes.image} src={img} alt="nothing found" />
        <p className={classes.text}>Nothing found, try another input</p>
      </div>
    );
  }
}
