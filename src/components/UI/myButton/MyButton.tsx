import React from 'react';
import './MyButton.css';

interface IMyButtonProps {
  children?: React.ReactNode;
}

class MyButton extends React.Component<IMyButtonProps> {
  constructor(props: IMyButtonProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <button type="submit" className="button">
        {this.props.children}
      </button>
    );
  }
}

export { MyButton };
