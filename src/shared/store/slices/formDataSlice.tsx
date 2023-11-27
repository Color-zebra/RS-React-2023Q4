import { createSlice } from '@reduxjs/toolkit';
import { AppSlice, FormType } from '../../types/types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AppSlice = {
  formData: {
    acceptTermsAndConditions: false,
    age: null,
    country: '',
    email: '',
    gender: null,
    image: null,
    name: '',
    password: '',
    repeatPassword: '',
  },
};

const formDataSlice = createSlice({
  initialState,
  name: 'formSlice',
  reducers: {
    setFormState: (state, action: PayloadAction<FormType>) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormState } = formDataSlice.actions;

export default formDataSlice.reducer;
