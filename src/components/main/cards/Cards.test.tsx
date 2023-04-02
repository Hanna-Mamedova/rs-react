import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Book } from 'models/card.model';
import Cards from './Cards';

describe('Cards component', () => {
  const mockBooks: Book[] = [
    {
      id: 1,
      price: 12,
      title: 'The Title 1',
      author: 'The Author 1',
      cover_url: 'https://example.com/book-cover-1.jpg',
      genre: 'The Genre',
      language: 'eng',
      created_date: '12.12.2022',
    },
    {
      id: 2,
      price: 12,
      title: 'The Title 2',
      author: 'The Author 2',
      cover_url: 'https://example.com/book-cover-2.jpg',
      genre: 'The Genre',
      language: 'eng',
      created_date: '12.12.2022',
    },
    {
      id: 3,
      price: 12,
      title: 'The Title 3',
      author: 'The Author 3',
      cover_url: 'https://example.com/book-cover-3.jpg',
      genre: 'The Genre',
      language: 'eng',
      created_date: '12.12.2022',
    },
  ];

  it('renders the correct number of cards', () => {
    render(<Cards books={mockBooks} />);
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(3);
  });

  it('renders the cards with the correct book props', () => {
    render(<Cards books={mockBooks} />);
    const cards = screen.getAllByTestId('card');
    expect(cards[0]).toHaveTextContent('The Title 1');
    expect(cards[0]).toHaveTextContent('The Author 1');
    expect(cards[0]).toHaveTextContent('$12');
  });
});
