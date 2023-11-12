import { render, screen } from '@testing-library/react';
import App from '../../app';
import userEvent from '@testing-library/user-event';
import { DetailedCharacterCard } from './ui/DetailedCharacterCard';

const characterStub = {
  gender: 'Male',
  id: '222',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  location: 'Citadel of Ricks',
  name: 'Rick Sanchez',
  origin: 'Earth (C-137)',
  species: 'Human',
  status: 'Alive',
  type: '',
  url: 'https://rickandmortyapi.com/api/character/1',
};

describe('DetailedCharacterCard component testing', () => {
  test('A loading indicator is displayed while fetching data', async () => {
    render(<App />);
    await userEvent.click((await screen.findAllByTestId('card'))[0]);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
  test('The detailed card component correctly displays the detailed card data', async () => {
    render(<DetailedCharacterCard {...characterStub} />);
    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
    expect(await screen.findByText('Human')).toBeInTheDocument();
    expect(await screen.findByText('Male')).toBeInTheDocument();
    expect(await screen.findByText('Alive')).toBeInTheDocument();
    expect(await screen.findByText('Citadel of Ricks')).toBeInTheDocument();
  });
  test('Clicking the close button hides the component', async () => {
    render(<App />);
    await userEvent.click((await screen.findAllByTestId('card'))[0]);
    expect(await screen.findByTestId('details')).toBeInTheDocument();
    await userEvent.click(await screen.findByTestId('close-details-button'));
    expect(screen.queryByTestId('details')).not.toBeInTheDocument();
  });
});
