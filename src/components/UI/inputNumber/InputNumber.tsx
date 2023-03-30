import { useController, UseControllerProps } from 'react-hook-form';

import { TFormValues } from 'type';
import './InputNumber.css';

function InputNumber(props: UseControllerProps<TFormValues>) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} type="text" className="input-text" placeholder={props.name} />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}

export { InputNumber };
