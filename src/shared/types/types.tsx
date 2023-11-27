export enum Genders {
  M = 'Male',
  F = 'Female',
}
type Base64Type<imageType extends string> =
  `data:image/${imageType};base64${string}`;

export type FormType = {
  name: string;
  age: number | null;
  email: string;
  password: string;
  repeatPassword: string;
  gender: Genders | null;
  acceptTermsAndConditions: boolean;
  image: Base64Type<'png'> | Base64Type<'jpg'> | Base64Type<'jpeg'> | null;
  country: string;
};

export type AppSlice = {
  formData: FormType;
};
