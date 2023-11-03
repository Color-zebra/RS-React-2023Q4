import { CharacterAttributes } from '../../../shared/types/types';
import classes from './CharacterCard.module.scss';
import placeholder from '../../../shared/assets/images/placeholder.jpg';

const CharacterCard = (props: CharacterAttributes) => {
  const { name, image, species, gender } = props;

  return (
    <div className={classes.card}>
      <div className={classes['image-wrapper']}>
        <img
          className={classes.image}
          src={image || placeholder}
          alt={`character ${name}`}
        />
      </div>
      <ul className={classes.list}>
        <li className={classes['list-item']}>
          name: <span className={classes.value}>{name}</span>
        </li>
        <li className={classes['list-item']}>
          species: <span className={classes.value}>{species}</span>
        </li>
        <li className={classes['list-item']}>
          gender: <span className={classes.value}>{gender}</span>
        </li>
      </ul>
    </div>
  );
};

export default CharacterCard;
