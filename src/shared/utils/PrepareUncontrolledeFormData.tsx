import React from 'react';

export const prepareUncontrolledFormData = (
  e: React.FormEvent<HTMLFormElement>
) => {
  const data = Object.fromEntries(
    new FormData((e.target as HTMLFormElement) || undefined)
  );

  const fileList = (
    (e.target as HTMLFormElement).elements.image as HTMLInputElement
  ).files;

  data.image = fileList
    ? (fileList as unknown as FormDataEntryValue)
    : data.image;

  data.acceptTermsAndConditions = (data.acceptTermsAndConditions === 'on'
    ? true
    : false) as unknown as FormDataEntryValue;

  data.age =
    data.age === ''
      ? (NaN as unknown as FormDataEntryValue)
      : (Number(data.age) as unknown as FormDataEntryValue);

  console.log(data);

  return data;
};
