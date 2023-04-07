import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HomePage } from './HomePage';

describe('Product list', () => {
  it('List fetch and display', async () => {
    const { findByText } = render(<HomePage title="Home page" callback={() => {}} />);
    expect(await findByText('iPhone 9')).toBeInTheDocument();
  });

  it('Product fetch and display', async () => {
    const { findByText } = render(<HomePage title="Home page" callback={() => {}} />);
    const div = await screen.findAllByTestId('item-card-product');
    await userEvent.click(div[0]);
    expect(await findByText('An apple mobile which is nothing like apple')).toBeInTheDocument();
  });
});
