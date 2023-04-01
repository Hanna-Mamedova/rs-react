import SearchBar from './SearchBar';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('SearchBar component', () => {
  it('renders the component', () => {
    render(<SearchBar />);
    const searchLabel = screen.getByText(/search/i);
    expect(searchLabel).toBeInTheDocument();
  });
});
