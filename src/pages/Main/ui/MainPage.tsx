import { Header } from '../../../widgets/Header';
import { Content } from '../../../widgets/Content';
import { Pagination } from '../../../features/Pagination';
import { useMainPage } from '../model/hooks/useMainPage';

const MainPage = () => {
  const {
    searchParam,
    changeSearchParams,
    characters,
    isReady,
    currPage,
    lastPage,
    setCurrPage,
  } = useMainPage();

  return (
    <>
      <Header onSearchPress={changeSearchParams} searchParam={searchParam} />
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
