import classes from './Page404.module.scss';
import img from '../../../shared/assets/images/404.webp';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <main className={classes.page} style={{ backgroundImage: `url(${img})` }}>
      <h1 className={classes.h1}>Page not found</h1>
      <h2 className={classes.h2}>Page not found</h2>
      <h3 className={classes.h3}>Page not found</h3>
      <h4 className={classes.h4}>Page not found</h4>
      <h5 className={classes.h5}>Page not found</h5>
      <h6 className={classes.h6}>Page not found</h6>
      <Link className={classes.link} to="/">
        <div>Go home</div>
      </Link>
    </main>
  );
};
