import React from 'react';
import './InputText.css';

interface IInputTextProps {
  name: string;
  myRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
}

class InputText extends React.Component<IInputTextProps> {
  constructor(props: IInputTextProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <input
        type="text"
        className="input-text"
        ref={this.props.myRef}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export { InputText };
