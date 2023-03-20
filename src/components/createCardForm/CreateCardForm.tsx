import './CreateCardForm.css';
import React from 'react';
import { MyInput } from '../UI/input/MyInput';

class CreateCardForm extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: e.currentTarget.value });
  };

  render(): React.ReactNode {
    return (
      <form className="container_search">
        <MyInput type="text" onChange={this.onChange} placeholder="Search bar" value="jh" />
      </form>
    );
  }
}

export { CreateCardForm };
