import { CharacterAttributes } from '../../../shared/types/types';
import classes from './CharacterCard.module.scss';
import placeholder from '../../../shared/assets/images/placeholder.jpg';
import { useNavigate } from 'react-router-dom';

const CharacterCard = (props: CharacterAttributes) => {
  const navigate = useNavigate();
  const { name, image, species, gender, id } = props;
  const handleClick = () => {
    navigate(id + window.location.search);
  };

  return (
    <div onClick={handleClick} className={classes.card}>
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
