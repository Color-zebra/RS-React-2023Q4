import React from 'react';

export const isUncontrolledFormComplete = (
  e: React.ChangeEvent<HTMLFormElement>
) => {
  const data = Object.fromEntries(
    new FormData((e.target.form as HTMLFormElement) || undefined)
  );

  const isImageExist = (data.image as File).name !== '';
  const isChecked = e.target.form.elements.acceptTermsAndConditions.checked;
  const otherFields =
    Object.values(data).filter((val) => val === '').length === 0;
  const isFormComplete = isImageExist && isChecked && otherFields;

  return isFormComplete;
};
