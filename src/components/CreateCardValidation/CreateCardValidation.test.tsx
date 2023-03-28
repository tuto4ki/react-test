import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreateCardValidation } from './CreateCardValidation';
import { vi } from 'vitest';

describe('Form component', () => {
  it('render form', () => {
    const handlerFunc = vi.fn();
    const container = render(<CreateCardValidation callback={handlerFunc} />);
    const name = container.queryByPlaceholderText('Project name');
    if (name) {
      userEvent.type(name, 'Name');
    }
    const price = container.queryByPlaceholderText('Project price');
    if (price) {
      userEvent.type(price, '123');
    }
    // description
    const description = container.queryByPlaceholderText('Description');
    if (description) {
      userEvent.type(description, 'Description');
    }
    // date
    const date = container.queryByRole('role-date');
    if (date) {
      userEvent.type(date, '2011-01-01');
    }
    // selectRoom
    const selectRoom = container.queryByRole('combobox');
    if (selectRoom) {
      fireEvent.change(selectRoom, { target: { value: 'kitchen' } });
    }
    // agree
    const agree = container.queryByRole('checkbox');
    if (agree) {
      expect(agree).not.toBeChecked();
      fireEvent.click(agree);
      expect(agree).toBeChecked();
    }
    // radio
    const radio = container.queryAllByRole('radio');
    if (radio) {
      expect(radio[0]).not.toBeChecked();
      fireEvent.click(radio[0]);
      expect(radio[0]).toBeChecked();
    }
    // file
    const file = container.queryByRole('role-file');
    if (file) {
      userEvent.type(file, '../picture.png');
      // fireEvent.change(file, { file: '../picture.png' });
    }
    const button = container.queryByRole('button');
    if (button) {
      fireEvent.click(button);
      expect(handlerFunc).toHaveBeenCalledTimes(0);
    }
    expect(container.queryByText(/Error Name/i)).toBeInTheDocument();
  });
});
