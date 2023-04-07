import React from 'react';

import './Label.css';

interface IMyLabelProps {
  htmlFor: string;
  children?: React.ReactNode;
}

export function Label(props: IMyLabelProps): JSX.Element {
  return (
    <label {...props} className="label">
      {props.children}
    </label>
  );
}
