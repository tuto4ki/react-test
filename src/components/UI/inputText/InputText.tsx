import { useController, UseControllerProps } from 'react-hook-form';

import { TFormValues } from 'type';
import './InputText.css';

function InputText(props: UseControllerProps<TFormValues>) {
  const { field, fieldState } = useController(props);
  // const { field: input } = useController({ name: 'name' })

  return (
    <div>
      <input {...field} type="text" className="input-text" placeholder={props.name} />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}

export { InputText };
