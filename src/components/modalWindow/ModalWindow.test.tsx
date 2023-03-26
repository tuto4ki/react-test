import { ModalWindow } from './ModalWindow';
import { render, screen } from '@testing-library/react';

describe('renders react', () => {
  it('render modal window', () => {
    render(<ModalWindow />);
    expect(screen.getByText(/Card added/i)).toBeInTheDocument();
  });
});
