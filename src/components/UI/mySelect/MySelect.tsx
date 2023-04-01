import React from 'react';

import { TSelectProps } from 'type';
import { MyOption } from '../MyOption/MyOption';
import './MySelect.css';

const MySelect = React.forwardRef<HTMLSelectElement, TSelectProps>(({ options, ...props }, ref) => (
  <select ref={ref} {...props} className="select">
    <option value="0">Choose type</option>
    {options.map((value) => (
      <MyOption value={value} key={value.toString()} />
    ))}
  </select>
));

export { MySelect };
