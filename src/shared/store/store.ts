import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './services/userService';
import appSliceReducer from './reducers/appSlice';

const rootReducer = combineReducers({
  appSliceReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  });

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
