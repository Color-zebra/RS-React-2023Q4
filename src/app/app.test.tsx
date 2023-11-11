import { render, screen } from '@testing-library/react';
import App from '.';

test('App should be rendered', () => {
  render(<App />);
  expect(screen.getByText('Elements per page')).toBeVisible();
});
