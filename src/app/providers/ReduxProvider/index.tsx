import React from 'react';
import { createStore } from '../../../shared/store/store';
import { Provider } from 'react-redux';

export const ReduxProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={createStore()}>{children}</Provider>;
};
