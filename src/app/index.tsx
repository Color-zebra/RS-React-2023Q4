import './styles/styles.scss';
import { MainPage } from '../pages/Main';
import { RouterProvider } from './providers/RouterProvider';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/" Component={MainPage} />
      </Routes>
    </RouterProvider>
  );
};

export default App;
