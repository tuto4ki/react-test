import { vi } from 'vitest';

import { ListProduct } from './ListProduct';
import { renderWithProviders } from '../../../tests/utils/testUtils';
import listProductJSON from '../../assets/json/productsListTest.json';
import { STATUS_REQUEST } from '../../store/type';

describe('renders component', () => {
  it('render list', async () => {
    const func = vi.fn(() => {});
    const { findByText, getAllByTestId } = renderWithProviders(<ListProduct callback={func} />, {
      preloadedState: {
        listProduct: {
          products: listProductJSON.products,
          status: STATUS_REQUEST.loading,
          error: '',
        },
      },
    });
    expect(await findByText('iPhone 9')).toBeInTheDocument();
    expect(getAllByTestId('item-card-product').length).toEqual(listProductJSON.limit);
  });
});
