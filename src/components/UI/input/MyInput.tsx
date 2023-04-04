import React from 'react';
import './MyInput.css';

interface IMyInputProps {
  name: string;
  id?: string;
  type: string;
  placeholder?: string;
  value?: string;
  className: string;
  defaultValue?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

function MyInput(props: IMyInputProps): JSX.Element {
  return <input {...props} />;
}

export { MyInput };
