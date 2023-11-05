import classes from './NothingFound.module.scss';
import img from '../../../shared/assets/images/nothing-found.jpg';

const NothingFound = () => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={img} alt="nothing found" />
      <p className={classes.text}>Nothing found, try another input</p>
    </div>
  );
};

export default NothingFound;
