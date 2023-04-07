import React from 'react';
import './Input.css';

interface IInputProps {
  name: string;
  id?: string;
  type: string;
  placeholder?: string;
  value?: string;
  className: string;
  defaultValue?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function Input(props: IInputProps): JSX.Element {
  return <input {...props} />;
}
