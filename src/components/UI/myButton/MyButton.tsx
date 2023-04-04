import React from 'react';
import './MyButton.css';

interface IMyButtonProps {
  children?: React.ReactNode;
}

function MyButton(props: IMyButtonProps): JSX.Element {
  return (
    <button type="submit" className="button">
      {props.children}
    </button>
  );
}

export { MyButton };
