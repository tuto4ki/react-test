import React from 'react';
import './InputCheckbox.css';

interface IInputCheckboxProps {
  name: string;
  myRef: React.RefObject<HTMLInputElement>;
}

class InputCheckbox extends React.Component<IInputCheckboxProps> {
  constructor(props: IInputCheckboxProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <input
        type="checkbox"
        name={this.props.name}
        className="input-checkbox"
        ref={this.props.myRef}
      />
    );
  }
}

export { InputCheckbox };
