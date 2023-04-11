import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('Modal', () => {
  const mockCharacter = {
    id: 1,
    name: 'Test Character',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: { name: 'Test Origin' },
    created: '2022-04-08T09:28:13.746Z',
    image: 'https://example.com/image.jpg',
  };

  it('renders nothing when open is false', () => {
    render(<Modal open={false} id={mockCharacter.id} onClose={() => {}} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
