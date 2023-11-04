import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterProvider = (props: React.PropsWithChildren) => {
  return <BrowserRouter>{props.children}</BrowserRouter>;
};
