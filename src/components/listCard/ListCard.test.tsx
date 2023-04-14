import { ListCard } from './ListCard';
import { renderWithProviders } from '../../../tests/utils/testUtils';
import listCardsJSON from '../../assets/json/card.json';

describe('renders component', () => {
  it('render list', async () => {
    const { getAllByTestId } = renderWithProviders(<ListCard />, {
      preloadedState: {
        listCard: {
          list: listCardsJSON.products,
        },
      },
    });
    expect(getAllByTestId('item-card').length).toEqual(listCardsJSON.products.length);
  });
});
