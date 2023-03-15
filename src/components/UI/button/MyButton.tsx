import React from 'react';
import './MyButton.css';

interface IProps {
  children: string;
  onClick: () => void;
}

class MyButton extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <button className="button" {...this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export { MyButton };
