import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HomePage } from './HomePage';
import { renderWithProviders } from '../../../../tests/utils/testUtils';
import listProductJSON from '../../../assets/json/productsListTest.json';
import productSearchJSON from '../../../assets/json/productSearchTest.json';
import { STATUS_REQUEST } from '../../../store/type';

describe('Product list', () => {
  it('Products list show', async () => {
    const { findByText } = renderWithProviders(<HomePage title="Home page" callback={() => {}} />, {
      preloadedState: {
        listProduct: {
          products: listProductJSON.products,
          status: STATUS_REQUEST.loading,
          error: '',
        },
      },
    });
    expect(await findByText(/Home page/i)).toBeInTheDocument();
    expect(await findByText('iPhone 9')).toBeInTheDocument();
  });
  it('A product show', async () => {
    const { findByText } = renderWithProviders(<HomePage title="Home page" callback={() => {}} />, {
      preloadedState: {
        listProduct: {
          products: listProductJSON.products,
          status: STATUS_REQUEST.loading,
          error: '',
        },
      },
    });
    const div = await screen.findAllByTestId('item-card-product');
    await userEvent.click(div[0]);
    expect(await findByText('An apple mobile which is nothing like apple')).toBeInTheDocument();
  });
  it('Product search', async () => {
    const { findAllByTestId } = renderWithProviders(
      <HomePage title="Home page" callback={() => {}} />,
      {
        preloadedState: {
          listProduct: {
            products: productSearchJSON.products,
            status: STATUS_REQUEST.loading,
            error: '',
          },
          searchInput: {
            value: 'phone',
          },
        },
      }
    );
    expect((await findAllByTestId('item-card-product')).length).toEqual(productSearchJSON.total);
  });
});
