import React from 'react';
import './MyLabel.css';

interface IMyLabelProps {
  htmlFor: string;
  children?: React.ReactNode;
}

function MyLabel(props: IMyLabelProps): JSX.Element {
  return (
    <label {...props} className="label">
      {props.children}
    </label>
  );
}

export { MyLabel };
