import React from 'react';

import { TInputProps } from 'type';
import './InputText.css';

const InputText = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} className="input-text" placeholder={props.name} />
));

export { InputText };
