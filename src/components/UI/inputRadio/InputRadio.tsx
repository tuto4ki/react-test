import React from 'react';
import './InputRadio.css';

interface IInputRadioProps {
  name: string;
  id: string;
  myRef: React.RefObject<HTMLInputElement>;
  defaultValue: string;
}

class InputRadio extends React.Component<IInputRadioProps> {
  constructor(props: IInputRadioProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <input
        type="radio"
        name={this.props.name}
        id={this.props.id}
        className="input-radio"
        defaultValue={this.props.defaultValue}
        ref={this.props.myRef}
      />
    );
  }
}

export { InputRadio };
