import { Header } from '../../../widgets/Header';
import { Content } from '../../../widgets/Content';
import { Pagination } from '../../../features/Pagination';
import { useMainPage } from '../model/hooks/useMainPage';
import { Dropdown } from '../../../features/Dropdown';
import { Outlet } from 'react-router-dom';

import classes from './MainPage.module.scss';

const MainPage = () => {
  const { isReady, limit, setLimit } = useMainPage();

  return (
    <>
      <Header />
      <Dropdown limit={limit} setLimit={setLimit} />
      <main className={classes.layout}>
        <Content isReady={isReady} />
        <Outlet />
      </main>
      {isReady && <Pagination />}
    </>
  );
};

export default MainPage;
