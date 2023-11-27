import { ReduxProvider } from './providers/ReduxProvider';
import { RouterApp } from './providers/Router';

export const App = () => {
  return (
    <ReduxProvider>
      <RouterApp />
    </ReduxProvider>
  );
};
