import { fireEvent, screen } from '@testing-library/react';

import { SearchBar } from './SearchBar';
import { renderWithProviders } from '../../../tests/utils/testUtils';

describe('renders component', () => {
  it('render search', () => {
    const testStr = 'test search';
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Search bar');
    fireEvent.change(input, { target: { value: testStr } });
    expect((input as HTMLInputElement).value).toBe(testStr);
  });
});
