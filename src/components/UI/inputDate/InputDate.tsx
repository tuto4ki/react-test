// import { useController, UseControllerProps } from 'react-hook-form';
/*
function InputDate(props: UseControllerProps) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} type="date" className="input-date" role="role-date" />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}
*/
import React from 'react';

import { TInputProps } from 'type';
import './InputDate.css';

const InputDate = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} type="date" className="input-date" role="role-date" />
));

export { InputDate };
