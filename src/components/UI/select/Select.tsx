import React from 'react';

import { TSelectProps } from 'type';
import { Option } from '../option/Option';
import './Select.scss';

export const Select = React.forwardRef<HTMLSelectElement, TSelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props} className="select">
      <option value="0">Choose type</option>
      {options.map((value) => (
        <Option value={value} key={value.toString()} />
      ))}
    </select>
  )
);
