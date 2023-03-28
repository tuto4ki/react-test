import React from 'react';
import './InputText.css';

interface IInputTextProps {
  name: string;
  myRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
}

function InputText(props: IInputTextProps): JSX.Element {
  const { name, myRef, placeholder } = props;
  return (
    <input type="text" className="input-text" ref={myRef} name={name} placeholder={placeholder} />
  );
}

export { InputText };
