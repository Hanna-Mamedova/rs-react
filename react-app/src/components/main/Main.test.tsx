import Main from './Main';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Main.tsx', () => {
  it('Check if the App render very well', () => {
    render(<Main />);
    screen.debug();
  });
});
