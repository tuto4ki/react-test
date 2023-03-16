import React from 'react';
import './MyInput.css';

interface IProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

class MyInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return <input className="input" {...this.props} />;
  }
}

export { MyInput };
