import { Header } from '../../../widgets/Header';
import { Content } from '../../../widgets/Content';
import { Pagination } from '../../../features/Pagination';
import { useMainPage } from '../model/hooks/useMainPage';
import { Dropdown } from '../../../features/Dropdown';

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
      <Content characters={characters} isReady={isReady} />
      <Pagination
        currPage={currPage}
        lastPage={lastPage}
        changePage={(pageNumber: number) => setCurrPage(pageNumber)}
      />
    </>
  );
};

export default MainPage;
