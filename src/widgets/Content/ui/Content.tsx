import { Component } from 'react';
import { CharacterCard } from '../../../entities/CharacterCard';
import Spinner from '../../../shared/ui/Spinner/Spinner';
import { Character } from '../../../shared/types/types';
import classes from './Content.module.scss';

type Props = {
  isReady: boolean;
  characters: Character[];
};

export default class Content extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isReady, characters } = this.props;
    return (
      <>
        {isReady ? (
          <div className={classes.layout}>
            {characters.map((char) => (
              <CharacterCard key={char.id} {...char} />
            ))}
          </div>
        ) : (
          <div className={classes.spinner}>
            <Spinner />
          </div>
        )}
      </>
    );
  }
}
