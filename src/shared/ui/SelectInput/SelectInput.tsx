import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormType } from '../../types/types';
import s from './SelectInput.module.scss';

type SelectInputType = {
  name: keyof FormType;
  placeholder: string;
  label: string;
  error?: FieldError;
  register?: UseFormRegister<FormType>;
};

export const SelectInput = ({
  register,
  name,
  label,
  error,
  placeholder,
}: SelectInputType) => {
  let registerProps = null;
  if (register) {
    registerProps = register(name);
  }

  return (
    <label className={s['wrapper']}>
      <p className={s['label']}>{label}</p>
      <select
        className={s['input']}
        {...registerProps}
        name={name}
        placeholder={placeholder}
      >
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      {error && <p className={s['error']}>{error.message}</p>}
    </label>
  );
};
