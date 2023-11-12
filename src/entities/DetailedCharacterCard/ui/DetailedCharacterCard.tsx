import { CharacterAttributes } from '../../../shared/types/types';
import classes from './DetailedCharacterCard.module.scss';
import placeholder from '../../../shared/assets/images/placeholder.jpg';

export const DetailedCharacterCard = (props: CharacterAttributes) => {
  const { name, image, species, gender, location, status } = props;

  return (
    <>
      <article className={classes.wrapper} data-testid="details">
        <div className={classes['image-wrapper']}>
          <img
            className={classes.image}
            src={image || placeholder}
            alt={`character ${name}`}
          />
        </div>
        <ul className={classes.list}>
          <li className={classes.title}>
            <h2 className={classes.value}>{name}</h2>
          </li>
          <li className={classes['list-item']}>
            <span className={classes.value}>{species}</span>
          </li>
          <li className={classes['list-item']}>
            <span className={classes.value}>{gender}</span>
          </li>
          <li className={classes['list-item']}>
            <span className={classes.value}>{status}</span>
          </li>
          <li className={classes['list-item']}>
            <span className={classes.value}>{location}</span>
          </li>
        </ul>
      </article>
    </>
  );
};
