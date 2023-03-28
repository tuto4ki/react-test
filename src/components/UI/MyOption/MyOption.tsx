import React from 'react';

interface IMyOptionProps {
  children: React.ReactNode;
  value: string;
}

function MyOption(props: IMyOptionProps): JSX.Element {
  const { children, value } = props;
  return <option value={value}>{children}</option>;
}

export { MyOption };
