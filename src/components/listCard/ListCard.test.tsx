import { ListCard } from './ListCard';
import { render, screen } from '@testing-library/react';
const dataCard = [
  {
    id: 1,
    name: 'Living room',
    date: '2023-01-01',
    typeRoom: 'Living room',
    description: 'Architecture and interior design focused',
    price: 54900,
    likes: -1,
    view: 1300,
    rating: 4.69,
    thumbnail: 'https://live.staticflickr.com/8592/15696147039_86af62c660_m.jpg',
    images: ['https://live.staticflickr.com/7523/15881550235_97b95d9ff0_m.jpg'],
  },
  {
    id: 2,
    name: 'Living room',
    date: '2023-01-01',
    typeRoom: 'Living room',
    description: 'Architecture and interior design ability. villas built to perfection in UAE',
    price: 89900,
    likes: 15,
    view: 1000,
    rating: 4.44,
    thumbnail: 'https://live.staticflickr.com/7550/15695466118_76716a5bc6_m.jpg',
    images: ['https://i.dummyjson.com/data/products/2/1.jpg'],
  },
];

describe('renders component', () => {
  it('render list', () => {
    render(<ListCard data={dataCard} />);
    expect(screen.getAllByTestId('item-card').length).toEqual(dataCard.length);
  });
});
