import { useState } from 'react';
import s from './AutocompleteInput.module.scss';

type AutocompleteInputType = {
  autocompleteList: string[];
};

export const AutocompleteInput = ({
  autocompleteList,
}: AutocompleteInputType) => {
  const [value, setValue] = useState<string>('');
  const [currVariants, setCurrVariants] = useState<string[]>([]);
  const [isVariantsShown, setIsVariantsShown] = useState<boolean>(false);

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

  const handleVarClick = (str: string) => {
    console.log('click');

    setValue(str);
    const newVariants = autocompleteList.filter((country) =>
      country.toLowerCase().includes(str.toLowerCase())
    );
    setCurrVariants(newVariants.slice(0, 5));
  };

  return (
    <div className={s['wrapper']}>
      <div className={s['input-wrapper']}>
        <input
          className={s['input']}
          onFocus={() => setIsVariantsShown(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsVariantsShown(false);
            }, 100)
          }
          type="text"
          value={value}
          onChange={handleChange}
          autoComplete="off"
        ></input>
      </div>
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
