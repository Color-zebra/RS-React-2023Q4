import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../../../pages/Main';

export const ConfiguredRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: ':id',
        element: <p>Outlet elem</p>,
      },
    ],
  },
]);
