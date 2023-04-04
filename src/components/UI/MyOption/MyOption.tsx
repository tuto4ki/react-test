interface IMyOptionProps {
  value: string;
}

function MyOption(props: IMyOptionProps): JSX.Element {
  const { value } = props;
  return <option value={value}>{value}</option>;
}

export { MyOption };
