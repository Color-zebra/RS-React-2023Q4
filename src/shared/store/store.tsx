import { configureStore, combineReducers } from '@reduxjs/toolkit';
import FormReducer from './slices/formDataSlice';

const rootReducer = combineReducers({
  FormReducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
