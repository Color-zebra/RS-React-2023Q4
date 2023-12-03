import { useState } from 'react';
import s from './AutocompleteInput.module.scss';
import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormType } from '../../../types/types';

type AutocompleteInputType = {
  autocompleteList: string[];
  register?: UseFormRegister<FormType>;
  setValue?: UseFormSetValue<FormType>;
  error?: FieldError;
  label: string;
  name: keyof FormType;
};

export const AutocompleteInput = ({
  autocompleteList,
  register,
  setValue: SetValueHook,
  label,
  error,
  name,
}: AutocompleteInputType) => {
  const [value, setValue] = useState<string>('');
  const [currVariants, setCurrVariants] = useState<string[]>([]);
  const [isVariantsShown, setIsVariantsShown] = useState<boolean>(false);

  const handleVarClick = (str: string) => {
    setValue(str);
    if (SetValueHook) {
      SetValueHook('country', str);
    }
    setIsVariantsShown(false);
    const newVariants = autocompleteList.filter((country) =>
      country.toLowerCase().includes(str.toLowerCase())
    );
    setCurrVariants(newVariants.slice(0, 5));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setValue(newVal);
    if (newVal === '') {
      setCurrVariants([]);
      return;
    }
    const newVariants = autocompleteList.filter((country) =>
      country.toLowerCase().includes(newVal.toLowerCase())
    );
    setCurrVariants(newVariants.slice(0, 5));
  };

  let registerProps = null;
  if (register) {
    registerProps = register('country', {
      onChange: (e) => handleChange(e),
      onBlur: () =>
        setTimeout(() => {
          setIsVariantsShown(false);
        }, 500),
      value: value,
    });
  } else {
    registerProps = {
      onChange: handleChange,
      onBlur: () =>
        setTimeout(() => {
          setIsVariantsShown(false);
        }, 500),
      value: value,
    };
  }

  return (
    <div className={s['wrapper']}>
      <p className={s['label']}>{label}</p>
      <div className={s['input-wrapper']}>
        <input
          className={s['input']}
          onFocus={() => {
            setIsVariantsShown(true);
          }}
          {...registerProps}
          type="text"
          autoComplete="off"
          name={name}
        />
      </div>
      {error && <p className={s['error']}>{error.message}</p>}
      {isVariantsShown && (
        <div className={s['variants-wrapper']}>
          {currVariants.map((str) => (
            <div
              className={s['variant']}
              key={str}
              onClick={() => handleVarClick(str)}
            >
              <span>{str}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
