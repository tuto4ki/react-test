/*
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { HomePage } from './HomePage';

const page = { title: 'About page', callback: () => {} };

describe('Product list', () => {
  it('List fetch and display', async () => {
    const { findByText } = render(<HomePage {...page} />);
    expect(await findByText('iPhone 9')).toBeInTheDocument();
  });
  it('Show product when click card', async () => {
    const { findByText } = render(<HomePage {...page} />);
    const button = await findByText('iPhone 9');
    expect(button).toBeInTheDocument();
    await act(async () => {
      const div = await screen.findAllByTestId('item-card-product');
      await userEvent.click(div[0]);
      //console.log(div[0]);
      // const card = await screen.findByText('apple mobile');
      // expect().toBeInTheDocument();
    });
    // console.debug(await findByText('An apple mobile which is nothing like apple'));
  });
});
*/
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { vi } from 'vitest';

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
