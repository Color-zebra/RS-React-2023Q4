import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../../../shared/store/store';

export const ReduxProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={createStore()}>{children}</Provider>;
};
