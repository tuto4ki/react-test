import { CreateCardForm } from './CreateCardForm';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

describe('Form component', () => {
  it('render form', () => {
    const handlerFunc = vi.fn();
    const ref = {
      form: React.createRef<HTMLFormElement>(),
      inputName: React.createRef<HTMLInputElement>(),
      inputPrice: React.createRef<HTMLInputElement>(),
      description: React.createRef<HTMLTextAreaElement>(),
      inputDate: React.createRef<HTMLInputElement>(),
      selectTypeRoom: React.createRef<HTMLSelectElement>(),
      inputAgree: React.createRef<HTMLInputElement>(),
      inputLikes: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
      inputFile: React.createRef<HTMLInputElement>(),
    };
    const error = {
      isValidName: true,
      messageErrorName: 'Error Name',
      isValidPrice: true,
      messageErrorPrice: 'Error Price',
      isValidDescription: true,
      messageErrorDescription: 'Error Description',
      isValidDate: true,
      messageErrorDate: 'Error Date',
      isValidTypeRoom: true,
      messageErrorTypeRoom: 'Error Type Room',
      isValidAgree: true,
      messageErrorAgree: 'Error Agree',
      isValidLikes: true,
      messageErrorLikes: 'Error Likes',
      isValidFile: true,
      messageErrorFile: 'Error File',
      showModal: false,
    };
    const container = render(<CreateCardForm callback={handlerFunc} refForm={ref} error={error} />);
    expect(container.queryByText(/Error Description/i)).not.toBeInTheDocument();
    const button = container.queryByRole('button');
    if (button) {
      fireEvent.click(button);
      expect(handlerFunc).toHaveBeenCalledTimes(1);
    }
  });
});
