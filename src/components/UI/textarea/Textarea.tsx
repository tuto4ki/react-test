import React from 'react';

import { TTextareaProps } from 'type';
import './Textarea.scss';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>((props, ref) => (
  <textarea ref={ref} {...props} className="input-textarea" placeholder={props.name} />
));
