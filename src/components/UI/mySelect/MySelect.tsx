import React from 'react';
import './MySelect.css';
import { MyOption } from '../MyOption/MyOption';

interface IMySelectProps {
  name: string;
  options: Array<string>;
  // myRef: React.RefObject<HTMLSelectElement>;
}

function MySelect(props: IMySelectProps): JSX.Element {
  const { name, options } = props;
  return (
    <select name={name} className="select">
      <option value="0">Choose type</option>
      {options.map((item) => (
        <MyOption value={item} key={item}>
          {item}
        </MyOption>
      ))}
    </select>
  );
}

export { MySelect };
