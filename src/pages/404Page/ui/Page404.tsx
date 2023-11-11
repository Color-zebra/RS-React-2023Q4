import classes from './Page404.module.scss';
import img from '../../../shared/assets/images/404.webp';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <main className={classes.page} style={{ backgroundImage: `url(${img})` }}>
      <h1 className={classes.h1}>Страница не найдена</h1>
      <h2 className={classes.h2}>Страница не найдена</h2>
      <h3 className={classes.h3}>Страница не найдена</h3>
      <h4 className={classes.h4}>Страница не найдена</h4>
      <h5 className={classes.h5}>Страница не найдена</h5>
      <h6 className={classes.h6}>Страница не найдена</h6>
      <Link className={classes.link} to="/">
        <div>Вернуться на главную</div>
      </Link>
    </main>
  );
};
