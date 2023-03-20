import React from 'react';
import './MyInput.css';

interface IMyInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

class MyInput extends React.Component<IMyInputProps> {
  constructor(props: IMyInputProps) {
    super(props);
  }

  render(): React.ReactNode {
    return <input className="input" {...this.props} />;
  }
}

export { MyInput };
