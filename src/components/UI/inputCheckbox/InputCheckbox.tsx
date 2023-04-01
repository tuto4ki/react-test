import React from 'react';

import { TInputProps } from 'type';
import './InputCheckbox.css';

const InputCheckbox = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} type="checkbox" className="input-checkbox" />
));
export { InputCheckbox };
