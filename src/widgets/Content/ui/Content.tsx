import { ReactNode, useEffect } from 'react';
import { CharacterCard } from '../../../entities/CharacterCard';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import classes from './Content.module.scss';
import { NothingFound } from '../../../entities/NothingFound';
import { Pagination } from '../../../features/Pagination';
import { Outlet } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/store/hooks/hooks';
import { rickAndMortyApi } from '../../../shared/store/services/userService';
import {
  setIsCharactersLoading,
  setLastPage,
} from '../../../shared/store/reducers/appSlice';

const Content = () => {
  const dispatch = useAppDispatch();
  const {
    searchTerm,
    itemsPerPage: limit,
    currPage,
  } = useAppSelector((store) => store.appSliceReducer);
  const {
    data,
    isSuccess: isReady,
    isFetching,
  } = rickAndMortyApi.useGetAllCharactersQuery({
    page: String(currPage),
    limit: String(limit),
    searchTerm,
  });
  const characters = data?.results;

  useEffect(() => {
    dispatch(setIsCharactersLoading(isFetching));
    if (isReady) {
      dispatch(setLastPage(Math.floor(data.total / limit)));
    }
  }, [data?.total, dispatch, isFetching, isReady, limit]);

  let res: ReactNode;

  if (characters && characters.length !== 0) {
    res = (
      <div className={classes.layout}>
        {characters.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
    );
  } else {
    res = <NothingFound />;
  }

  return (
    <>
      {!isFetching ? (
        <>
          {res}
          <Outlet />
          <Pagination />
        </>
      ) : (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Content;
