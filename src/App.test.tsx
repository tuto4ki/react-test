import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '../tests/utils/testUtils';
import App from './App';

describe('renders learn react link', () => {
  test('render App', () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
