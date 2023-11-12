import { screen, render } from '@testing-library/react';
import App from '../../app';
import userEvent from '@testing-library/user-event';

describe('Search component testing', () => {
  test('The component retrieves the value from the local storage upon mounting', async () => {
    const getItem = vi.spyOn(Storage.prototype, 'getItem');
    render(<App />);
    await userEvent.click(screen.getByTestId('search-submit-button'));
    expect(getItem).toBeCalled();
  });
  test('Clicking the Search button saves the entered value to the local storage', async () => {
    const setItem = vi.spyOn(Storage.prototype, 'setItem');
    render(<App />);
    await userEvent.click(screen.getByTestId('search-submit-button'));
    expect(setItem).toBeCalled();
  });
});
