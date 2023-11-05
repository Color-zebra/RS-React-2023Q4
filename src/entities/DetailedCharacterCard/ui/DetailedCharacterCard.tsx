import { CharacterAttributes } from '../../../shared/types/types';
import classes from './DetailedCharacterCard.module.scss';
import placeholder from '../../../shared/assets/images/placeholder.jpg';

export const DetailedCharacterCard = (props: CharacterAttributes) => {
  const { name, image, species, gender, born, wiki } = props;

  return (
    <div>
      <div className={classes.wrapper}>
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
            <span className={classes.value}>Born: {born}</span>
          </li>
          <li className={classes['list-item']}>
            <a
              href={wiki}
              target="_blank"
              rel="noreferrer"
              className={classes.value}
            >
              Wiki link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
