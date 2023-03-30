import { useController, UseControllerProps } from 'react-hook-form';

import { TFormValues } from 'type';
import './MyTextarea.css';

function MyTextarea(props: UseControllerProps<TFormValues>): JSX.Element {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <textarea {...field} className="input-textarea" placeholder={props.name} />
      <p className="message-error">{fieldState.error ? fieldState.error.message : ''}</p>
    </div>
  );
}

export { MyTextarea };
