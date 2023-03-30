import { useController, UseControllerProps } from 'react-hook-form';

import { TFormValues } from 'type';
import './InputDate.css';

function InputDate(props: UseControllerProps<TFormValues>) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} type="date" className="input-date" role="role-date" />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}

export { InputDate };
