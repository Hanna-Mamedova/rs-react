import SearchBar from './SearchBar';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('SearchBar.tsx', () => {
  it('Check if the App render very well', () => {
    render(<SearchBar />);
    screen.debug();
  });
});
