import './styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { ConfiguredRouter } from './providers/RouterProvider';
import { ContextProvider } from './providers/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={ConfiguredRouter} />
    </ContextProvider>
  );
};

export default App;
