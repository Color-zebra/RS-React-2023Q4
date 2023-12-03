import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormType } from '../../types/types';
import s from './TextInput.module.scss';

type TextInputType = {
  name: keyof FormType;
  placeholder: string;
  label: string;
  error?: FieldError;
  register?: UseFormRegister<FormType>;
  onChangeAdditional?: () => void;
};

export const TextInput = ({
  register,
  name,
  label,
  error,
  placeholder,
  onChangeAdditional,
}: TextInputType) => {
  let registerProps = null;
  if (register) {
    registerProps = register(name, {
      onChange: onChangeAdditional ? onChangeAdditional : () => {},
    });
  }

  const type = name.toLowerCase().includes('password') ? 'password' : 'text';

  return (
    <label className={s['wrapper']}>
      <p className={s['label']}>{label}</p>
      <input
        name={name}
        className={s['input']}
        type={type}
        {...registerProps}
        placeholder={placeholder}
      />
      {error && <p className={s['error']}>{error.message}</p>}
    </label>
  );
};
