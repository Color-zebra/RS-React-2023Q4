import { render, screen } from '@testing-library/react';
import CharacterCard from './ui/CharacterCard';
import { MemoryRouter } from 'react-router-dom';
import App from '../../app';
import userEvent from '@testing-library/user-event';

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

describe('Card component testing', () => {
  test('The card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <CharacterCard {...characterStub} />
      </MemoryRouter>
    );
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Human')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
  });

  test('Clicking on a card opens a detailed card component', async () => {
    render(<App />);
    await userEvent.click((await screen.findAllByTestId('card'))[0]);
    expect(await screen.findByTestId('details')).toBeInTheDocument();
  });

  test('Clicking triggers an additional API call to fetch detailed information', async () => {
    render(<App />);
    const fetchSpy = vi.spyOn(window, 'fetch');
    await userEvent.click((await screen.findAllByTestId('card'))[0]);
    expect(fetchSpy).toHaveBeenCalledWith(
      'https://belka.romakhin.ru/api/v1/rimorti/222'
    );
  });
});
