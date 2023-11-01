import { Character } from '../../../shared/types/types';
import classes from './CharacterCard.module.scss';

const CharacterCard = (props: Character) => {
  const { name, image, species, status } = props;

  return (
    <div className={classes.card}>
      <img className={classes.image} src={image} alt={`character ${name}`} />
      <ul className={classes.list}>
        <li className={classes['list-item']}>
          name: <span className={classes.value}>{name}</span>
        </li>
        <li className={classes['list-item']}>
          species: <span className={classes.value}>{species}</span>
        </li>
        <li className={classes['list-item']}>
          status: <span className={classes.value}>{status}</span>
        </li>
      </ul>
    </div>
  );
};

export default CharacterCard;
