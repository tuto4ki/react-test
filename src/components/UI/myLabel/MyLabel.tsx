import React from 'react';
import './MyLabel.css';

interface IMyLabelProps {
  htmlFor: string;
  children?: React.ReactNode;
}

class MyLabel extends React.Component<IMyLabelProps> {
  constructor(props: IMyLabelProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <label {...this.props} className="label">
        {this.props.children}
      </label>
    );
  }
}

export { MyLabel };
