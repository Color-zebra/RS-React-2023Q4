import './styles/styles.scss';
import { MainPage } from '../pages/Main';
import { RouterProvider } from './providers/RouterProvider';

const App = () => {
  return (
    <RouterProvider>
      <MainPage />
    </RouterProvider>
  );
};

export default App;
