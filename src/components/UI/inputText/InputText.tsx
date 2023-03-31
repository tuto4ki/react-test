/*
interface IInputText {
  register: userfor;
  name: string;
}
function InputText(props: IInputText): JSX.Element {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} type="text" className="input-text" placeholder={props.name} />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}
*/
import React from 'react';

import { TInputProps } from 'type';
import './InputText.css';

const InputText = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} className="input-text" placeholder={props.name} />
));

export { InputText };
