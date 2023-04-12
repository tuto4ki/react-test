import { fireEvent, render, screen } from '@testing-library/react';

import { SearchBar } from './SearchBar';

describe('renders component', () => {
  it('render search', () => {
    const testStr = 'test search';
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search bar');
    fireEvent.change(input, { target: { value: testStr } });
    expect((input as HTMLInputElement).value).toBe(testStr);
  });
});
