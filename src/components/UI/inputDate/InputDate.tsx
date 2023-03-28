import React from 'react';
import './InputDate.css';

interface IInputDateProps {
  name: string;
  myRef: React.RefObject<HTMLInputElement>;
}

function InputDate(props: IInputDateProps) {
  const { name, myRef } = props;
  return <input type="date" className="input-date" ref={myRef} name={name} role="role-date" />;
}

export { InputDate };
