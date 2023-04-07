import { CreateCardForm } from './CreateCardForm';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Form component', () => {
  it('render form', () => {
    const handlerFunc = vi.fn();
    const container = render(<CreateCardForm callback={handlerFunc} />);
    const name = container.queryByPlaceholderText(/name/);
    expect(name).toBeDefined();
    if (name) {
      userEvent.type(name, 'Name');
    }
    const price = container.queryByPlaceholderText(/price/);
    expect(price).toBeInTheDocument();
    if (price) {
      userEvent.type(price, '123');
    }
    const description = container.queryByPlaceholderText(/description/);
    expect(price).toBeInTheDocument();
    if (description) {
      userEvent.type(description, 'Description');
    }
    const date = container.queryByRole('role-date');
    expect(date).toBeInTheDocument();
    if (date) {
      userEvent.type(date, '2011-01-01');
    }
    const selectRoom = container.queryByRole('combobox');
    expect(selectRoom).toBeInTheDocument();
    if (selectRoom) {
      userEvent.type(selectRoom, 'kitchen');
    }
    const agree = container.queryByRole('checkbox');
    expect(agree).toBeInTheDocument();
    if (agree) {
      expect(agree).not.toBeChecked();
      userEvent.click(agree);
    }
    const radio = container.queryAllByRole('role-radio');
    expect(radio).toHaveLength(2);
    if (radio) {
      expect(radio[0]).not.toBeChecked();
      userEvent.click(radio[0]);
    }
    const file = container.queryByRole('role-file');
    expect(file).toBeInTheDocument();
    if (file) {
      userEvent.type(file, '../picture.png');
    }
    expect(container.queryByText(/Error Description/i)).not.toBeInTheDocument();
  });
});
