import { SearchBar } from './SearchBar';
import { fireEvent, render, screen } from '@testing-library/react';

describe('renders learn react link', () => {
  it('render list', () => {
    const testStr = 'test search';
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search bar');
    fireEvent.change(input, { target: { value: testStr } });
    expect((input as HTMLInputElement).value).toBe(testStr);
  });
});
