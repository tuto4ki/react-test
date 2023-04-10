import React from 'react';

import './Button.scss';

interface IButtonProps {
  children?: React.ReactNode;
}

export function Button(props: IButtonProps): JSX.Element {
  return (
    <button type="submit" className="button">
      {props.children}
    </button>
  );
}
