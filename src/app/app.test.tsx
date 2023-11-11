import { render, screen } from '@testing-library/react';
import App from '.';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from './providers/RouterProvider/model/routerConfig';

test('App should be rendered', () => {
  render(<App />);
  expect(screen.getByText('Elements per page')).toBeVisible();
});

test('404 page should appear after wrong url was input', async () => {
  const badRoute = '/verywrongurl';
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [badRoute],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getAllByText('Page not found').length).toBe(6);
});
