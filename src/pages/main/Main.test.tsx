import Main from './Main';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Book } from 'models/card.model';

describe('Main', () => {
  it('Check if the Main renders', () => {
    render(<Main />);
    const searchBar = screen.getByRole('search');
    const cards = screen.getByRole('list');

    expect(searchBar).toBeInTheDocument();
    expect(cards).toBeInTheDocument();

    screen.debug();
  });
});
