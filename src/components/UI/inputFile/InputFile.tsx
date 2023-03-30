import React from 'react';
import './InputFile.css';

interface IInputFileProps {
  name: string;
  // myRef: React.RefObject<HTMLInputElement>;
}

function InputFile(props: IInputFileProps): JSX.Element {
  const { name } = props;
  return <input type="file" name={name} accept="image/*" className="input-file" role="role-file" />;
}

export { InputFile };
