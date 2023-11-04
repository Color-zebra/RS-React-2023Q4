import { ReactNode } from 'react';
import { CharacterCard } from '../../../entities/CharacterCard';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import classes from './Content.module.scss';
import { NothingFound } from '../../../entities/NothingFound';
import { CharacterAttributes } from '../../../shared/types/types';

type Props = {
  isReady: boolean;
  characters: CharacterAttributes[];
};

const Content = (props: Props) => {
  const { isReady, characters } = props;

  let res: ReactNode;

  if (characters && characters.length !== 0) {
    res = (
      <div className={classes.layout}>
        {characters.map((char) => (
          <CharacterCard key={char.slug} {...char} />
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
