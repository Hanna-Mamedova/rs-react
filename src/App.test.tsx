import App from './App';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('App.tsx', () => {
  it('Check if the App render very well', () => {
    render(<App />);
    screen.debug();
  });
});
