import { Control } from 'react-hook-form';
// import { TFormValues } from "type"
// import { RadioButton } from "./RadioButton";

interface IWrapperRadioGroup {
  name: string;
  label: string;
  control: Control;
  options: Array<string>;
  value: string;
}

function WrapperRadioGroup(props: IWrapperRadioGroup) {
  /* props.
  return (
    <>
      {props.label}
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.value}
        render={({ field: {onChange, ...props} }) => 
          options.map((option, index) => (
           <RadioButton
             key={index}
             {...props} 
             onChange={onChange}
             value={option}  
             label={label} 
          />
          ))
        }
      />
    </>  
  )
  */
  return <div>{props.name}</div>;
}

export { WrapperRadioGroup };
