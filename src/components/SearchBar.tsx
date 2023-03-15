import React from 'react';
import { MyInput } from './UI/input/MyInput';

interface IState {
  value: string;
}

class SearchBar extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    let valueInput = localStorage.getItem('search');
    if (valueInput === null) {
      valueInput = '';
    }
    this.state = {
      value: valueInput
    };
  }
  
  setStateSearch(): void {
    localStorage.setItem('search', this.state.value);
  }

  componentDidUpdate(prevProps: IState) {
    if (prevProps.value !== this.state.value) {
      this.setStateSearch();
    }
  }
  
  componentWillUnmount() {
    this.setStateSearch();
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: e.currentTarget.value });
  };

  render(): React.ReactNode {
    return (
      <div className="container_search">
        <MyInput
          type="text"
          onChange={this.onChange}
          placeholder="Search bar"
          value={this.state.value}
        />
      </div>
    )
  }
}

export { SearchBar };
