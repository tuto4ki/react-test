/*import { useController, UseControllerProps } from 'react-hook-form';

function InputFile(props: UseControllerProps) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} type="file" className="input-file" accept="image/*" role="role-file" />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}
*/
import React from 'react';

import { TInputProps } from 'type';
import './InputFile.css';

const InputFile = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => (
  <input
    ref={ref}
    {...props}
    className="input-file"
    type="file"
    accept="image/*"
    role="role-file"
  />
));

export { InputFile };
