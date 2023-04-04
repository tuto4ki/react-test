import { render, screen } from '@testing-library/react';
import { CreateCardPage } from './CreateCardPage';

describe('renders component', () => {
  test('render createPage', () => {
    const page = { title: 'Create card', callback: () => {} };
    render(<CreateCardPage {...page} />);
    expect(screen.getByText(/Create card/i)).toBeInTheDocument();
  });
});
