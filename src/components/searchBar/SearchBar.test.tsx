import { SearchBar } from './SearchBar';
import { fireEvent, render, screen } from '@testing-library/react';

describe('renders component', () => {
  it('render search', () => {
    const testStr = 'test search';
    render(<SearchBar callback={(str: string) => {}} />);
    const input = screen.getByPlaceholderText('Search bar');
    fireEvent.change(input, { target: { value: testStr } });
    expect((input as HTMLInputElement).value).toBe(testStr);
  });
});
