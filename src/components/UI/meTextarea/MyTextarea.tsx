/*
import { useController, UseControllerProps } from 'react-hook-form';

import './MyTextarea.css';

function MyTextarea(props: UseControllerProps): JSX.Element {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <textarea {...field} className="input-textarea" placeholder={props.name} />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}
*/
import React from 'react';

import { TTextareaProps } from 'type';
import './MyTextarea.css';

const MyTextarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>((props, ref) => (
  <textarea ref={ref} {...props} className="input-textarea" placeholder={props.name} />
));

export { MyTextarea };
