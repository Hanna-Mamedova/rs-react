import Card from './Card';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Card component', () => {
  const mockCard = {
    id: 1,
    name: 'Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
  };

  it('renders the book title, author', () => {
    render(<Card key={mockCard.id} card={mockCard} onClick={() => {}} />);
    const name = screen.getByText('Rick');
    const status = screen.getByText('Alive');
    expect(name).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });

  it('renders the book cover image', () => {
    render(<Card key={1} card={mockCard} onClick={() => {}} />);
    const image = screen.getByAltText('Card Cover');
    expect(image).toHaveAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg');
  });
});
