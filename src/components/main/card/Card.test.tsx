import Card from './Card';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Card.tsx', () => {
  it('Check if the Card render passed data', () => {
    const book = {
      id: 1,
      price: 12,
      title: 'The Title',
      author: 'The Author',
      cover_url: './src/assets/book1.png',
      genre: 'The Genre',
      language: 'eng',
      created_date: '12.12.2022',
    };

    render(<Card key={book.id} book={book} />);
    screen.debug();
  });
});
