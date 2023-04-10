import React from 'react';

import { TInputProps } from 'type';
import './InputDate.scss';

export const InputDate = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input ref={ref} {...props} type="date" className="input-date" role="role-date" />
));
