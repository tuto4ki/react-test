interface IOptionProps {
  value: string;
}

export function Option(props: IOptionProps): JSX.Element {
  const { value } = props;
  return <option value={value}>{value}</option>;
}
