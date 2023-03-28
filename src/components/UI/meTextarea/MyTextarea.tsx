import React from 'react';
import './MyTextarea.css';

interface IMyTextareaProps {
  name: string;
  myRef: React.RefObject<HTMLTextAreaElement>;
  placeholder: string;
}

class MyTextarea extends React.Component<IMyTextareaProps> {
  constructor(props: IMyTextareaProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <textarea
        className="input-textarea"
        ref={this.props.myRef}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export { MyTextarea };
