import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../../app/providers/RouterProvider/model/routerConfig';
import { ContextProvider } from '../../app/providers/ContextProvider';

describe('Pagination component testing', () => {
  test('Component updates URL query parameter when page changes', async () => {
    const router = createMemoryRouter(routerConfig);
    render(
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    );
    await userEvent.click(await screen.findByTestId('next-page-button'));
    expect(router.state.location.search).toBe('?page=2');
    await userEvent.click(await screen.findByTestId('next-page-button'));
    expect(router.state.location.search).toBe('?page=3');
  });
});
