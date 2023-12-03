import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormType } from '../../types/types';
import s from './CheckBoxInput.module.scss';

type CheckBoxInputType = {
  name: keyof FormType;
  label: string;
  error?: FieldError;
  register?: UseFormRegister<FormType>;
};

export const CheckBoxInput = ({
  register,
  name,
  label,
  error,
}: CheckBoxInputType) => {
  let registerProps = null;
  if (register) {
    registerProps = register(name);
  }

  return (
    <label className={s['wrapper']}>
      <p className={s['label']}>{label}</p>
      <input
        name={name}
        className={s['input']}
        type="checkbox"
        {...registerProps}
      />
      {error && <p className={s['error']}>{error.message}</p>}
    </label>
  );
};
