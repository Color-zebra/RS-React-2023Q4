import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSliceType } from '../../types/storeTypes';

const initialState: AppSliceType = {
  isCharactersLoading: false,
  isDetailsLoading: false,
  itemsPerPage: 6,
  searchTerm: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setIsCharactersLoading: (state, action: PayloadAction<boolean>) => {
      state.isCharactersLoading = action.payload;
    },
    setIsDetailsLoading: (state, action: PayloadAction<boolean>) => {
      state.isDetailsLoading = action.payload;
    },
  },
});

export default appSlice.reducer;

export const {
  setItemsPerPage,
  setSearchTerm,
  setIsCharactersLoading,
  setIsDetailsLoading,
} = appSlice.actions;
