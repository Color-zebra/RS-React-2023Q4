import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../../../pages/Main';
import { Details } from '../../../../widgets/Details';

export const ConfiguredRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: ':id',
        element: <Details />,
      },
    ],
  },
]);
