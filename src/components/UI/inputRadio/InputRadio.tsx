/*
import { useController, UseControllerProps } from 'react-hook-form';

import './InputRadio.css';

function InputRadio(props: UseControllerProps) {
  const { field, fieldState } = useController(props);

  return (
    <span>
      <input {...field} type="radio" className="input-radio" />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </span>
  );
}
*/
import React from 'react';

import { TInputProps } from 'type';
import './InputRadio.css';

const InputRadio = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} className="input-radio" type="radio" />
));

export { InputRadio };
