import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormType } from '../../types/types';
import s from './NumberInput.module.scss';

type NumberInputType = {
  name: keyof FormType;
  placeholder: string;
  label: string;
  error?: FieldError;
  register?: UseFormRegister<FormType>;
};

export const NumberInput = ({
  register,
  name,
  label,
  error,
  placeholder,
}: NumberInputType) => {
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
        type="number"
        {...registerProps}
        placeholder={placeholder}
      />
      {error && <p className={s['error']}>{error.message}</p>}
    </label>
  );
};
