import { render, screen } from '@testing-library/react';

import { ListCard } from './ListCard';
import dataCard from '../../assets/json/card.json';

describe('renders component', () => {
  it('render list', () => {
    render(<ListCard />);
    expect(screen.getAllByTestId('item-card').length).toEqual(dataCard.products.length);
  });
});
