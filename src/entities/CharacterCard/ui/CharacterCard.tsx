import { CharacterAttributes } from '../../../shared/types/types';
import classes from './CharacterCard.module.scss';
import placeholder from '../../../shared/assets/images/placeholder.jpg';
import { useNavigate } from 'react-router-dom';

const CharacterCard = (props: CharacterAttributes) => {
  const navigate = useNavigate();
  const { name, image, species, gender, id } = props;
  const handleClick = () => {
    navigate(`details/${id + window.location.search}`);
  };

  return (
    <article onClick={handleClick} className={classes.card} data-testid="card">
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
    </article>
  );
};

export default CharacterCard;
