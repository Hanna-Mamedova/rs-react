import SearchBar from './SearchBar';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('SearchBar component', () => {
  it('renders the component', () => {
    render(<SearchBar inputText="inputText" onChange={() => {}} onKeyDown={() => {}} />);
    const search = screen.getByRole('search');
    expect(search).toBeInTheDocument();
  });
});
