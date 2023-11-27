import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Controlled } from '../../../pages/Controlled';
import { Result } from '../../../pages/Result';
import { Uncontrolled } from '../../../pages/Uncontrolled';
import { NotFound } from '../../../pages/NotFoundPage';

const routerConfig = [
  {
    path: '/',
    element: <Result />,
  },
  {
    path: 'uncontrolled',
    element: <Uncontrolled />,
  },
  {
    path: 'controlled',
    element: <Controlled />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routerConfig);

export const RouterApp = () => <RouterProvider router={router} />;
