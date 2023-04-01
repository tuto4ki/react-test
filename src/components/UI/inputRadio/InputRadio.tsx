import React from 'react';

import { TInputProps } from 'type';
import './InputRadio.css';

const InputRadio = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} className="input-radio" type="radio" />
));

export { InputRadio };
