import React from 'react';

import { TInputProps } from 'type';
import './InputRadio.css';

export const InputRadio = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} className="input-radio" type="radio" role="role-radio" />
));
