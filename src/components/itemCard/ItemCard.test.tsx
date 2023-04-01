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

describe('renders component', () => {
  it('render img name', () => {
    render(<ItemCard {...data} />);
    expect(screen.getByText(data.name)).toBeInTheDocument();
  });
  it('render img alt text', () => {
    render(<ItemCard {...data} />);
    expect(screen.getByAltText(data.name)).toBeInTheDocument();
  });
  it('render img id', () => {
    render(<ItemCard {...data} />);
    expect(screen.getAllByTestId('item-card').length).toEqual(1);
  });
  it('render likes', () => {
    render(<ItemCard {...data} />);
    expect(screen.getByText(data.likes)).toBeInTheDocument();
  });
});
