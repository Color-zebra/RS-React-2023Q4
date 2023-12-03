import * as yup from 'yup';
import { FormType } from '../types/types';

export const schema: yup.ObjectSchema<FormType> = yup.object({
  acceptTermsAndConditions: yup
    .boolean()
    .required('Field is required!')
    .oneOf([true], 'Accept is required'),
  age: yup
    .number()
    .typeError('Amount must be a number')
    .required('Field is required!')
    .min(0, 'Age cannot be negative'),
  country: yup.string().required('Field is required!'),
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
    )
    .test(
      'size',
      'Image size should be less than 1Mb',
      (value) => value[0]?.size < 1048576
    )
    .test('type', 'only jpeg and png allowed', (value) => {
      const type = value[0]?.type;
      return (
        type?.includes('jpg') || type?.includes('jpeg') || type?.includes('png')
      );
    }),
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
