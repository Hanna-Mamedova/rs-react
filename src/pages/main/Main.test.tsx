import Main from './Main';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Main component', () => {
  it('Check if the Main renders', () => {
    render(<Main />);
    screen.debug();
  });
});
