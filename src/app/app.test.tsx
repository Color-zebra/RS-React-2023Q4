import { render, screen } from '@testing-library/react';
import App from '.';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from './providers/RouterProvider/model/routerConfig';

describe('Test App navigation', () => {
  test('App just rendered', () => {
    render(<App />);
    expect(screen.getByText('Elements per page')).toBeVisible();
  });

  test('The 404 page is displayed when navigating to an invalid route', async () => {
    const badRoute = '/verywrongurl';
    const router = createMemoryRouter(routerConfig, {
      initialEntries: [badRoute],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getAllByText('Page not found').length).toBe(6);
  });
});
