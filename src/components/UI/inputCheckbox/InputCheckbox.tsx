/*
import { useController, UseControllerProps } from 'react-hook-form';

import './InputCheckbox.css';

function InputCheckbox(props: UseControllerProps) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} type="checkbox" className="input-checkbox" />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}
*/
import React from 'react';

import { TInputProps } from 'type';
import './InputCheckbox.css';

const InputCheckbox = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} type="checkbox" className="input-checkbox" />
));
export { InputCheckbox };
