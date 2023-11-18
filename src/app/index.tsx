import './styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { ConfiguredRouter } from './providers/RouterProvider';
// import { ContextProvider } from './providers/ContextProvider';
import { ReduxProvider } from './providers/ReduxProvider';

const App = () => {
  return (
    <ReduxProvider>
      <RouterProvider router={ConfiguredRouter} />
    </ReduxProvider>
  );
};

export default App;
