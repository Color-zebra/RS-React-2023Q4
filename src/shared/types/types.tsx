import { FieldError } from 'react-hook-form';

export enum Genders {
  M = 'Male',
  F = 'Female',
}
export type FormType = {
  name: string;
  age: number;
  email: string;
  password: string;
  repeatPassword: string;
  gender: string;
  acceptTermsAndConditions: boolean;
  image?: FileList;
  country: string;
};

export type AppSlice = {
  formData: FormType;
};

export type Countries = string[];

export type CountriesSlice = {
  countries: Countries;
};

export type FormErrorsType = Record<keyof FormType, FieldError>;
