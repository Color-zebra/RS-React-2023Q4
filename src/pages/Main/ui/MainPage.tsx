import { Header } from '../../../widgets/Header';
import { Content } from '../../../widgets/Content';
import { Dropdown } from '../../../features/Dropdown';
// import { Outlet } from 'react-router-dom';

import classes from './MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <Header />
      <Dropdown />
      <main className={classes.layout}>
        <Content />
      </main>
    </>
  );
};

export default MainPage;
