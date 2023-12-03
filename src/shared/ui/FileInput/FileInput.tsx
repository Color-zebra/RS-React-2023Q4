import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormType } from '../../types/types';
import s from './FileInput.module.scss';

type FileInputType = {
  name: keyof FormType;
  error?: FieldError;
  register?: UseFormRegister<FormType>;
};

export const FileInput = ({ register, name, error }: FileInputType) => {
  let registerProps = null;
  if (register) {
    registerProps = register(name);
  }

  return (
    <div className={s['wrapper']}>
      <p className={s['label']}>Load file</p>
      <label className={s['custom']}>
        <span>Upload</span>

        <input
          name={name}
          {...registerProps}
          className={s['input']}
          type="file"
          multiple
        />
      </label>
      {error && <span className={s['error']}>{error.message}</span>}
    </div>
  );
};
