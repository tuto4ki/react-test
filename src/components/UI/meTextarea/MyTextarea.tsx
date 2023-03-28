import React from 'react';
import './MyTextarea.css';

interface IMyTextareaProps {
  name: string;
  myRef: React.RefObject<HTMLTextAreaElement>;
  placeholder: string;
}

function MyTextarea(props: IMyTextareaProps): JSX.Element {
  const { name, myRef, placeholder } = props;
  return <textarea className="input-textarea" ref={myRef} name={name} placeholder={placeholder} />;
}

export { MyTextarea };
