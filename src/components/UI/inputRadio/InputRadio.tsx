import React from 'react';

import { TInputProps } from 'type';
import './InputRadio.scss';

export const InputRadio = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} className="input-radio" type="radio" role="role-radio" />
));
