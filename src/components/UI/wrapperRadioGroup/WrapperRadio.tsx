import { Control, Controller } from "react-hook-form";

import { RadioButton } from "./RadioButton";

function WrapperRadio(/*control: Control*/) {
  /*
  return (
    <div>
       <Controller
        control={control}
        name={name}
        render={({ field: {onChange, ...props} }) => 
        <RadioButton
        onChange={e => onChange(e.target.checked)}
        {...props} label={label} />}
     />
    </div>
  */
  return <div></div>
};

export { WrapperRadio };