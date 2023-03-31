import { CreateCardForm } from './CreateCardForm';
import { fireEvent, render } from '@testing-library/react';
import { vi, beforeAll } from 'vitest';

describe('Form component', () => {
  it('render form', () => {
    const handlerFunc = vi.fn();
    const container = render(<CreateCardForm callback={handlerFunc} />);
    expect(container.queryByText(/Error Description/i)).not.toBeInTheDocument();
    const button = container.queryByRole('button');
    if (button) {
      fireEvent.click(button);
      beforeAll(async () => {
        await handlerFunc();
        return async () => {
          expect(handlerFunc).toHaveBeenCalledTimes(1);
        };
      });
      expect(handlerFunc).toHaveBeenCalledTimes(0);
    }
  });
});
