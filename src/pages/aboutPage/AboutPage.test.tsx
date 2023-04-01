import { render, screen } from '@testing-library/react';
import { AboutPage } from './AboutPage';

describe('renders component', () => {
  test('render App', () => {
    const page = { title: 'About page', callback: () => {} };
    render(<AboutPage {...page} />);
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
  });
});
