import { configureStore, combineReducers } from '@reduxjs/toolkit';
import FormReducer from './slices/formDataSlice';
import CountriesReducer from './slices/countriesSlice';

const rootReducer = combineReducers({
  FormReducer,
  CountriesReducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
