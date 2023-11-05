import { ReactNode } from 'react';
import { CharacterCard } from '../../../entities/CharacterCard';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import classes from './Content.module.scss';
import { NothingFound } from '../../../entities/NothingFound';
import { CharacterAttributes } from '../../../shared/types/types';
import { useNavigate } from 'react-router-dom';

type Props = {
  isReady: boolean;
  characters: CharacterAttributes[];
};

const Content = (props: Props) => {
  const { isReady, characters } = props;
  const navigate = useNavigate();

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
      {isReady ? (
        res
      ) : (
        <div
          className={classes.spinner}
          onClick={() => navigate('..' + window.location.search)}
        >
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Content;
