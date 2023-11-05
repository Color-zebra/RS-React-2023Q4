import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../../../pages/Main';
import { Details } from '../../../../widgets/Details';
import { FallBackPage } from '../../../../pages/FallBackPage';

export const ConfiguredRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <FallBackPage />,
    children: [
      {
        path: ':id',
        element: <Details />,
      },
    ],
  },
]);
