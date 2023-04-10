import React from 'react';
import './Input.scss';

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
