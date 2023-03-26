import React from 'react';
import './MySelect.css';

interface IMyOptionProps {
  children: React.ReactNode;
  value: string;
}

class MyOption extends React.Component<IMyOptionProps> {
  render(): React.ReactNode {
    return <option value={this.props.value}>{this.props.children}</option>;
  }
}

interface IMySelectProps {
  name: string;
  options: Array<string>;
  myRef: React.RefObject<HTMLSelectElement>;
}

class MySelect extends React.Component<IMySelectProps> {
  constructor(props: IMySelectProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <select name={this.props.name} className="select" ref={this.props.myRef}>
        <option value="0">Choose type</option>
        {this.props.options.map((item) => (
          <MyOption value={item} key={item}>
            {item}
          </MyOption>
        ))}
      </select>
    );
  }
}

export { MySelect };
