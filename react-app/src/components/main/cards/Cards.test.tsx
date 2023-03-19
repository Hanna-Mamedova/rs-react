import Cards from './Cards';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Cards.tsx', () => {
  it('Check if the Cards render list of cards', () => {
    render(<Cards />);
    screen.debug();
  });
});
