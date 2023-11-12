import { screen, render } from '@testing-library/react';
import App from '../../app';
import userEvent from '@testing-library/user-event';

describe('Fallback UI testing', () => {
  test('Clicking "THROW AN ERROR" button call fallback UI', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Throw an error'));
    expect(
      screen.getByText('Looks like everything is broken :(')
    ).toBeInTheDocument();
  });
});
