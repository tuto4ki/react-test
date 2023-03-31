/*
import { useController, UseControllerProps } from 'react-hook-form';

import { MyOption } from '../MyOption/MyOption';

import options from '../../../assets/json/typeRoom.json';


function MySelect(props: UseControllerProps) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <select {...field} className="select">
        <option value="0">Choose type</option>
        {options.typeRoom.map((item) => (
          <MyOption value={item} key={item}>
            {item}
          </MyOption>
        ))}
      </select>
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};
*/
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
