import { render, screen } from '@testing-library/react';
import App from '../../app';
import userEvent from '@testing-library/user-event';

describe('Card list testing', async () => {
  test('The component renders the specified number of cards (6 by default, and 12 after user choose it)', async () => {
    render(<App />);
    expect(await screen.findAllByText('name:')).toHaveLength(6);
    expect(await screen.findAllByText('species:')).toHaveLength(6);
    expect(await screen.findAllByText('gender:')).toHaveLength(6);
    expect(await screen.findAllByText('gender:')).not.toHaveLength(12);
    const selectElement = screen.getByTestId('card-per-page-selector');
    await userEvent.selectOptions(selectElement, '12');
    expect(await screen.findAllByText('name:')).toHaveLength(12);
    expect(await screen.findAllByText('species:')).toHaveLength(12);
    expect(await screen.findAllByText('gender:')).toHaveLength(12);
    expect(await screen.findAllByText('gender:')).not.toHaveLength(6);
    expect(await screen.findAllByText('gender:')).not.toHaveLength(18);
  });

  test('An appropriate message is displayed if no cards are present', async () => {
    const badSearchTerm = 'asdasdaq123435a4s1dasd';
    render(<App />);
    const inputElement = screen.getByTestId('search-input');
    const submitElement = screen.getByTestId('search-submit-button');
    await userEvent.type(inputElement, badSearchTerm);
    await userEvent.click(submitElement);
    expect(
      await screen.findByText('Nothing found, try another input')
    ).toBeInTheDocument();
  });
});
