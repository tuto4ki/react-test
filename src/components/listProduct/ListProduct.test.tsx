import { vi } from 'vitest';
import { ListProduct } from './ListProduct';
import { renderWithProviders } from '../../../tests/utils/testUtils';
import listProductJSON from '../../assets/json/productsListTest.json';

describe('renders component', () => {
  it('render list', async () => {
    const func = vi.fn(() => {});
    const { findByText, getAllByTestId } = renderWithProviders(<ListProduct callback={func} />);
    expect(await findByText('iPhone 9')).toBeInTheDocument();
    expect(getAllByTestId('item-card-product').length).toEqual(listProductJSON.limit);
  });
});
