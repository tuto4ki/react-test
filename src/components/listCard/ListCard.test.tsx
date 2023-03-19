import { ListCard } from './ListCard';
import { render, screen } from '@testing-library/react';

describe('renders learn react link', () => {
  it('render list', () => {
    render(<ListCard />);
    expect(screen.getAllByTestId('item-card').length).toEqual(10);
  });
});
