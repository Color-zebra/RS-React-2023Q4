import { Header } from '../../../widgets/Header';
import { Content } from '../../../widgets/Content';
import { Pagination } from '../../../features/Pagination';
import { useMainPage } from '../model/hooks/useMainPage';
import { Dropdown } from '../../../features/Dropdown';
import { Outlet } from 'react-router-dom';

import classes from './MainPage.module.scss';

const MainPage = () => {
  const {
    searchParam,
    changeSearchParams,
    characters,
    isReady,
    currPage,
    lastPage,
    setCurrPage,
    limit,
    setLimit,
  } = useMainPage();

  return (
    <>
      <Header onSearchPress={changeSearchParams} searchParam={searchParam} />
      <Dropdown limit={limit} setLimit={setLimit} />
      <main className={classes.layout}>
        <Content characters={characters} isReady={isReady} />
        <Outlet />
      </main>
      {isReady && (
        <Pagination
          currPage={currPage}
          lastPage={lastPage}
          changePage={(pageNumber: number) => setCurrPage(pageNumber)}
        />
      )}
    </>
  );
};

export default MainPage;
