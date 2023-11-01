import { ReactNode } from 'react';
import { CharacterCard } from '../../../entities/CharacterCard';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import { Character } from '../../../shared/types/types';
import classes from './Content.module.scss';
import { NothingFound } from '../../../entities/NothingFound';

type Props = {
  isReady: boolean;
  characters: Character[];
};

const Content = (props: Props) => {
  const { isReady, characters } = props;

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
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Content;
