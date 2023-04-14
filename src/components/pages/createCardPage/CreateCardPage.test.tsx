import { screen } from '@testing-library/react';

import { CreateCardPage } from './CreateCardPage';
import { renderWithProviders } from '../../../../tests/utils/testUtils';

describe('renders component', () => {
  test('render createPage', () => {
    renderWithProviders(<CreateCardPage title="Create card" callback={() => {}} />);
    expect(screen.getByText(/Create card/i)).toBeInTheDocument();
  });
});
