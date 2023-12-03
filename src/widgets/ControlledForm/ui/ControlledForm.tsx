import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../../shared/store/hooks/hooks';
import { AutocompleteInput } from '../../../shared/ui/AutocompleteInput';
import s from './ControlledForm.module.scss';
import { FormType } from '../../../shared/types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema: yup.ObjectSchema<FormType> = yup.object({
  acceptTermsAndConditions: yup
    .boolean()
    .required('Field is required!')
    .oneOf([true], 'Accept is required'),
  age: yup
    .number()
    .required('Field is required!')
    .min(0, 'Age cannot be negative'),
  country: yup.string().required('Please, select your country'),
  email: yup
    .string()
    .required('Field is required!')
    .email('Email is not valid'),
  gender: yup.string().required('Field is required!'),
  image: yup
    .mixed<FileList>()
    .required('Field is required!')
    .test(
      'required',
      'Selecting file is required',
      (value) => value?.length !== 0
    ),
  name: yup
    .string()
    .required('Field is required!')
    .matches(/^[A-Z].*/, 'First letter must be capital'),
  password: yup
    .string()
    .required('Field is required!')
    .matches(/\d/, 'The password should contain at least one number')
    .matches(
      /[A-Z]/,
      'The password should contain at least one uppercase letter'
    )
    .matches(
      /[a-z]/,
      'The password should contain at least one lowercase letter'
    )
    .matches(
      /[!?@#$%^&*]/,
      'The password should contain at least one special character from: !?@#$%^&*'
    ),
  repeatPassword: yup
    .string()
    .required('Field is required!')
    .test('passwords-match', 'Passwords is not the same', function (value) {
      return this.parent.password === value;
    }),
});

export const ControlledForm = () => {
  const countries = useAppSelector((store) => store.CountriesReducer.countries);
  const initialValues: FormType = {
    acceptTermsAndConditions: false,
    age: 0,
    country: '',
    email: '',
    gender: '',
    image: undefined,
    name: '',
    password: '',
    repeatPassword: '',
  };
  const form = useForm<FormType>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { register, handleSubmit, setValue, formState } = form;
  const { errors, touchedFields } = formState;
  console.log(errors);

  const onSubmit = (data: FormType) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <form className={s['form']} onSubmit={handleSubmit(onSubmit)}>
      <h3>Controlled form</h3>
      <input type="text" {...register('name')} placeholder="Name" />
      <input type="text" {...register('email')} placeholder="Email" />
      <input type="number" {...register('age')} placeholder="Age" />
      <input type="text" {...register('password')} placeholder="Password" />
      <input
        type="text"
        {...register('repeatPassword')}
        placeholder="RepeatPassword"
      />
      <select {...register('gender')} name="gender">
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <label>
        <input {...register('acceptTermsAndConditions')} type="checkbox" />
        Accept T & C
      </label>
      <label className={s['file-input-label']}>
        Load file
        <input {...register('image')} className={s['file-input']} type="file" />
      </label>
      <AutocompleteInput
        register={register}
        autocompleteList={countries}
        setValue={setValue}
      />
      {Object.keys(errors).length === 0 &&
        Object.keys(touchedFields).length !== 0 && (
          <button type="submit">Submit</button>
        )}
    </form>
  );
};
