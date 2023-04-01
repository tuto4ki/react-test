import React from 'react';

import { TInputProps } from 'type';
import './InputFile.css';

const InputFile = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input
    ref={ref}
    {...props}
    className="input-file"
    type="file"
    accept="image/*"
    role="role-file"
  />
));

export { InputFile };
