import { createSlice } from '@reduxjs/toolkit';
import { AppSlice, SubmitFormType } from '../../types/types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AppSlice = {
  forms: [],
};

const formDataSlice = createSlice({
  initialState,
  name: 'formSlice',
  reducers: {
    addForm: (state, action: PayloadAction<SubmitFormType>) => {
      state.forms.unshift(action.payload);
    },
  },
});

export const { addForm } = formDataSlice.actions;

export default formDataSlice.reducer;
