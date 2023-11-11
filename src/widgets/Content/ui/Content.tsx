import { ReactNode, useContext } from 'react';
import { CharacterCard } from '../../../entities/CharacterCard';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import classes from './Content.module.scss';
import { NothingFound } from '../../../entities/NothingFound';
import { useNavigate } from 'react-router-dom';
import { CharactersContext } from '../../../app/providers/ContextProvider/model/contexts/CharactersContext';

type Props = {
  isReady: boolean;
};

const Content = ({ isReady }: Props) => {
  const {
    state: { characters },
  } = useContext(CharactersContext);
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
