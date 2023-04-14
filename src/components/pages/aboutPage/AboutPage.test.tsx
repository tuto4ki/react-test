import { screen } from '@testing-library/react';

import { AboutPage } from './AboutPage';
import { renderWithProviders } from '../../../../tests/utils/testUtils';

describe('renders component', () => {
  test('render App', () => {
    renderWithProviders(<AboutPage title="About page" callback={() => {}} />);
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
  });
});
