import { Link, useNavigate, useParams } from 'react-router-dom';
import classes from './Details.module.scss';
import { useEffect, useState } from 'react';
import { CharactersAPI } from '../../../shared/api/RickAndMorty/Characters';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import { CharacterAttributes } from '../../../shared/types/types';
import { DetailedCharacterCard } from '../../../entities/DetailedCharacterCard';

export const Details = () => {
  const api = CharactersAPI.getInstance();
  const { id } = useParams();
  const [isReady, setIsReady] = useState<boolean>(false);
  const [charData, setCharData] = useState<CharacterAttributes | null>(null);

  const navigate = useNavigate();

  const closeDetails = () => {
    navigate('..' + window.location.search);
  };

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsReady(false);
      const data = await api.getSingleCharacter(id!);
      setCharData(data);
      setIsReady(true);
    };

    fetchCharacter();
  }, [api, id]);
  return (
    <>
      <div className={classes.back} onClick={closeDetails}></div>
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
