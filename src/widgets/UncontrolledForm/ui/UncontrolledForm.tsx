import { useAppSelector } from '../../../shared/store/hooks/hooks';
import { AutocompleteInput } from '../../../shared/ui/AutocompleteInput';
import s from './UncontrolledForm.module.scss';
import { FormErrorsType } from '../../../shared/types/types';
import { schema } from '../../../shared/validation/schema';
import { TextInput } from '../../../shared/ui/TextInput/TextInput';
import { NumberInput } from '../../../shared/ui/NumberInput/NumberInput';
import { SelectInput } from '../../../shared/ui/SelectInput/SelectInput';
import { CheckBoxInput } from '../../../shared/ui/CheckBoxInput/CheckBoxInput';
import { FileInput } from '../../../shared/ui/FileInput/FileInput';
import { Button } from '../../../shared/ui/Button/Button';
import { prepareUncontrolledFormData } from '../../../shared/utils/PrepareUncontrolledeFormData';
import { ValidationError } from 'yup';
import { useState } from 'react';

export const UncontrolledForm = () => {
  const countries = useAppSelector((store) => store.CountriesReducer.countries);
  const [errors, setErrors] = useState<Partial<FormErrorsType>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = prepareUncontrolledFormData(e);

    try {
      const res = await schema.validate(data, {
        strict: true,
        abortEarly: false,
      });
      setErrors({});
      console.log('res', res);
    } catch (e) {
      if (!(e instanceof ValidationError)) {
        throw new Error('Everything is broken. Nice work!');
      }

      const formErrors: Partial<FormErrorsType> = {};
      e.inner.forEach((error) => {
        const fieldName = error.path as keyof FormErrorsType;
        if (!formErrors[fieldName]) {
          formErrors[fieldName] = {
            type: 'deps',
            message: error.message,
          };
        }
      });

      setErrors(formErrors);
    }
  };
  return (
    <form className={s['form']} onSubmit={onSubmit}>
      <h3>Controlled form</h3>
      <TextInput
        label="Username"
        name="name"
        placeholder="username"
        error={errors.name}
      />
      <TextInput
        label="Email"
        name="email"
        placeholder="email"
        error={errors.email}
      />
      <NumberInput
        label="Age"
        name="age"
        placeholder="age"
        error={errors.age}
      />
      <TextInput
        label="Password"
        name="password"
        placeholder="password"
        error={errors.password}
      />
      <TextInput
        label="Repeat password"
        name="repeatPassword"
        placeholder="password"
        error={errors.repeatPassword}
      />
      <SelectInput
        label="Gender"
        name="gender"
        placeholder="gender"
        error={errors.gender}
      />
      <CheckBoxInput
        label="Accept T & C"
        name="acceptTermsAndConditions"
        error={errors.acceptTermsAndConditions}
      />
      <AutocompleteInput
        name="country"
        label="Country"
        autocompleteList={countries}
        error={errors.country}
      />
      <FileInput name="image" error={errors.image} />
      <Button disabled={false} name="Submit" type="submit" />
    </form>
  );
};
