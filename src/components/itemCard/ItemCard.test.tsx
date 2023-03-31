import { ItemCard } from './ItemCard';
import { render, screen } from '@testing-library/react';

const data = {
  id: 1,
  name: 'Living room',
  date: '2011-01-01',
  description:
    'Architecture and interior design focused on the details, practicality and sustainability. Bespoke and unique luxury houses and villas built to perfection in UAE',
  price: 54900,
  likes: 30,
  view: 1300,
  typeRoom: 'Living room',
  rating: 4,
  thumbnail: 'https://live.staticflickr.com/8592/15696147039_86af62c660_m.jpg',
  images: [
    'https://live.staticflickr.com/7523/15881550235_97b95d9ff0_m.jpg',
    'https://live.staticflickr.com/7512/15694041628_ea78492db5_m.jpg',
  ],
  inputAgree: '',
};

describe('renders learn react link', () => {
  it('render list', () => {
    render(<ItemCard {...data} />);
    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByAltText(data.name)).toBeInTheDocument();
    expect(screen.getAllByTestId('item-card').length).toEqual(1);
  });
});
