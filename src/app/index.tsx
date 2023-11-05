import './styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { ConfiguredRouter } from './providers/RouterProvider';

const App = () => {
  return <RouterProvider router={ConfiguredRouter} />;
};

export default App;
