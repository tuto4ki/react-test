import React from 'react';
import './MyInput.css';

interface IMyInputProps {
  name: string;
  id?: string;
  type: string;
  placeholder?: string;
  value: string;
  className: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

class MyInput extends React.Component<IMyInputProps> {
  constructor(props: IMyInputProps) {
    super(props);
  }

  render(): React.ReactNode {
    return <input {...this.props} />;
  }
}

export { MyInput };
