import React from 'react';
import './InputFile.css';

interface IInputFileProps {
  name: string;
  myRef: React.RefObject<HTMLInputElement>;
}

class InputFile extends React.Component<IInputFileProps> {
  constructor(props: IInputFileProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <input
        type="file"
        name={this.props.name}
        accept="image/*"
        className="input-file"
        ref={this.props.myRef}
        role="role-file"
      />
    );
  }
}

export { InputFile };
