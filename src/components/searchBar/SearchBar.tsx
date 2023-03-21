import React from 'react';
import { MyInput } from '../UI/input/MyInput';
import './SearchBar.css';

interface ISearchBarState {
  value: string;
}

class SearchBar extends React.Component<Record<string, never>, ISearchBarState> {
  constructor(props: Record<string, never>) {
    super(props);
    let valueInput = localStorage.getItem('search');
    if (valueInput === null) {
      valueInput = '';
    }
    this.state = {
      value: valueInput,
    };
  }

  setStateSearch(): void {
    localStorage.setItem('search', this.state.value);
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
          name="search"
          onChange={this.onChange}
          placeholder="Search bar"
          value={this.state.value}
          className="input"
        />
      </div>
    );
  }
}

export { SearchBar };
