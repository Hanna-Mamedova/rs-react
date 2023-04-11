import Main from './Main';
import { it, describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Main component', () => {
  test('renders without errors', () => {
    render(<Main />);
    const searchBarElement = screen.getByRole('search');
    expect(searchBarElement).toBeInTheDocument();
  });

  it('Check if the Main renders', () => {
    render(<Main />);
    screen.debug();
  });
});
