import React from 'react';
import './InputDate.css';

interface IInputDateProps {
  name: string;
  myRef: React.RefObject<HTMLInputElement>;
}

class InputDate extends React.Component<IInputDateProps> {
  constructor(props: IInputDateProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <input type="date" className="input-date" ref={this.props.myRef} name={this.props.name} />
    );
  }
}

export { InputDate };
