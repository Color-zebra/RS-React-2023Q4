import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../../../pages/Main';
import { Details } from '../../../../widgets/Details';
import { FallBackPage } from '../../../../pages/FallBackPage';
import { Page404 } from '../../../../pages/404Page';

export const ConfiguredRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <FallBackPage />,
    children: [
      {
        path: 'details/:id',
        element: <Details />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
