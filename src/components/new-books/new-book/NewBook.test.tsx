import Book from './NewBook';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Card component', () => {
  const mockBook = {
    price: '12',
    title: 'The Title',
    author: 'The Author',
    image: 'https://example.com/book-cover.jpg',
    genre: ['The Genre'],
    lang: 'eng',
    date: '12.12.2022',
    onStock: 'yes',
  };

  it('renders the book title, author', () => {
    render(<Book key={1} book={mockBook} />);
    const title = screen.getByText('The Title');
    const author = screen.getByText('The Author');
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });

  it('renders the book cover image', () => {
    render(<Book key={1} book={mockBook} />);
    const image = screen.getByAltText('Book Cover');
    expect(image).toHaveAttribute('src', 'https://example.com/book-cover.jpg');
  });
});
