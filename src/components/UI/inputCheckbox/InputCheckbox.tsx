import React from 'react';
import './InputCheckbox.css';

interface IInputCheckboxProps {
  name: string;
  // myRef: React.RefObject<HTMLInputElement>;
}

function InputCheckbox(props: IInputCheckboxProps): JSX.Element {
  return <input type="checkbox" name={props.name} className="input-checkbox" />;
}

export { InputCheckbox };
