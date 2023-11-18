import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../../app/providers/RouterProvider/model/routerConfig';
import { createStore } from '../../shared/store/store';
import { Provider } from 'react-redux';

describe('Pagination component testing', () => {
  test('Component updates URL query parameter when page changes', async () => {
    const router = createMemoryRouter(routerConfig);
    render(
      <Provider store={createStore()}>
        <RouterProvider router={router} />
      </Provider>
    );
    await userEvent.click(await screen.findByTestId('next-page-button'));
    expect(router.state.location.search).toBe('?page=2');
    await userEvent.click(await screen.findByTestId('next-page-button'));
    expect(router.state.location.search).toBe('?page=3');
  });
});
