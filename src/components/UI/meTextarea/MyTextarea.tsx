import React from 'react';

import { TTextareaProps } from 'type';
import './MyTextarea.css';

const MyTextarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>((props, ref) => (
  <textarea ref={ref} {...props} className="input-textarea" placeholder={props.name} />
));

export { MyTextarea };
