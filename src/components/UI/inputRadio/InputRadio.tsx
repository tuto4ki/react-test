import React from 'react';
import './InputRadio.css';

interface IInputRadioProps {
  name: string;
  id: string;
  // myRef: React.RefObject<HTMLInputElement>;
  defaultValue: string;
}

function InputRadio(props: IInputRadioProps): JSX.Element {
  const { name, id, defaultValue } = props;
  return (
    <input type="radio" name={name} id={id} className="input-radio" defaultValue={defaultValue} />
  );
}

export { InputRadio };
