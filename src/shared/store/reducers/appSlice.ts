import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSliceType } from '../../types/storeTypes';
import hashLSKey from '../../utils/hashLocalStorageKey';

const initialState: AppSliceType = {
  isCharactersLoading: false,
  isDetailsLoading: false,
  itemsPerPage: 6,
  currPage: 1,
  lastPage: 1,
  searchTerm: localStorage.getItem(hashLSKey('searchParam')) || '',
};

const appSlice = createSlice({
  name: 'app',
  initialState: () => initialState,
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
    setCurrPage: (state, action: PayloadAction<number>) => {
      state.currPage = action.payload;
    },
    setLastPage: (state, action: PayloadAction<number>) => {
      state.lastPage = action.payload;
    },
  },
});

export default appSlice.reducer;

export const {
  setItemsPerPage,
  setSearchTerm,
  setIsCharactersLoading,
  setIsDetailsLoading,
  setCurrPage,
  setLastPage,
} = appSlice.actions;
