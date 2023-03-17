import { ListCard } from './ListCard';
import { render, screen } from '@testing-library/react';

/*
const data = {
  products: [
    {
      id: 1,
      title: 'Living room',
      description:
        'Architecture and interior design focused on the details, practicality and sustainability. Bespoke and unique luxury houses and villas built to perfection in UAE',
      price: 54900,
      likes: 30,
      view: 1300,
      rating: 4.69,
      thumbnail: 'https://live.staticflickr.com/8592/15696147039_86af62c660_m.jpg',
      images: [
        'https://live.staticflickr.com/7523/15881550235_97b95d9ff0_m.jpg',
        'https://live.staticflickr.com/7512/15694041628_ea78492db5_m.jpg',
      ],
    },
    {
      id: 2,
      title: 'Living room',
      description:
        'Architecture and interior design focused on the details, practicality and sustainability. Bespoke and unique luxury houses and villas built to perfection in UAE',
      price: 89900,
      likes: 15,
      view: 1000,
      rating: 4.44,
      thumbnail: 'https://live.staticflickr.com/7550/15695466118_76716a5bc6_m.jpg',
      images: [
        'https://i.dummyjson.com/data/products/2/1.jpg',
        'https://i.dummyjson.com/data/products/2/2.jpg',
        'https://i.dummyjson.com/data/products/2/3.jpg',
        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      ],
    },
    {
      id: 3,
      title: 'Living room',
      description:
        'Architecture and interior design focused on the details, practicality and sustainability. Bespoke and unique luxury houses and villas built to perfection in UAE',
      price: 12400,
      likes: 120,
      view: 937,
      rating: 4.09,
      thumbnail: 'https://live.staticflickr.com/7548/15696959449_2a3b360eb0_m.jpg',
      images: [
        'https://i.dummyjson.com/data/products/3/1.jpg',
        'https://m.media-amazon.com/images/I/71A0m3BjuKL._AC_SX679_.jpg',
      ],
    },
  ],
};
*/

describe('renders learn react link', () => {
  it('render list', () => {
    render(<ListCard />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
