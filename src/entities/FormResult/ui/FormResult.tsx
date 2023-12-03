import { SubmitFormType } from '../../../shared/types/types';
import s from './FormResult.module.scss';

export const FormResult = (props: SubmitFormType) => {
  const {
    acceptTermsAndConditions,
    age,
    country,
    email,
    gender,
    image,
    name,
    password,
  } = props;
  return (
    <div className={s['wrapper']}>
      <span>
        name: <span className={s['value']}>{name}</span>{' '}
      </span>
      <span>
        email: <span className={s['value']}>{email}</span>{' '}
      </span>
      <span>
        age: <span className={s['value']}>{age}</span>{' '}
      </span>
      <span>
        T & C accepted:{' '}
        <span className={s['value']}>{String(acceptTermsAndConditions)}</span>{' '}
      </span>
      <span>
        country: <span className={s['value']}>{country}</span>{' '}
      </span>
      <span>
        gender: <span className={s['value']}>{gender}</span>{' '}
      </span>
      <span>
        password: <span className={s['value']}>{password}</span>{' '}
      </span>
      <div className={s['img-wrapper']}>
        <img className={s['image']} src={image} alt="asd" />
      </div>
    </div>
  );
};
