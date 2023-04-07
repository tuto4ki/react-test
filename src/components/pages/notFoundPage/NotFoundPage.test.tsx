import { render, screen } from '@testing-library/react';

import { NotFoundPage } from './NotFoundPage';

describe('renders component', () => {
  test('render Not page', () => {
    const page = { title: 'Page not found', callback: () => {} };
    render(<NotFoundPage {...page} />);
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
