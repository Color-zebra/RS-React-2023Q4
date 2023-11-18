import { Link, useNavigate, useParams } from 'react-router-dom';
import classes from './Details.module.scss';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import { DetailedCharacterCard } from '../../../entities/DetailedCharacterCard';
import { rickAndMortyApi } from '../../../shared/store/services/userService';
import { useAppDispatch } from '../../../shared/store/hooks/hooks';
import { setIsDetailsLoading } from '../../../shared/store/reducers/appSlice';

export const Details = () => {
  const { id } = useParams();
  const { isSuccess: isReady, data: charData } =
    rickAndMortyApi.useGetSingleCharacterQuery(id!);

  const dispatch = useAppDispatch();
  dispatch(setIsDetailsLoading(isReady));

  const navigate = useNavigate();

  const closeDetails = () => {
    navigate('..' + window.location.search);
  };
  return (
    <>
      <div
        className={classes.back}
        data-testid="close-details-button"
        onClick={closeDetails}
      ></div>
      <div className={classes.wrapper}>
        <Link to={'..' + window.location.search}>
          <div className={classes.close}>
            <span>X</span>
          </div>
        </Link>
        {isReady && charData ? (
          <DetailedCharacterCard {...charData} />
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};
