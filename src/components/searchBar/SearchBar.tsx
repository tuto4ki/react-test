import React, { ChangeEvent, useEffect, useState } from 'react';

import { Input } from '../UI/input/Input';
import './SearchBar.scss';

function SearchBar(props: { callback: { (pathSearch: string): void } }): JSX.Element {
  const { callback } = props;
  const [valueInput, setValueInput] = useState<string>(
    localStorage.getItem('search') ? String(localStorage.getItem('search')) : ''
  );

  useEffect(() => {
    callback(valueInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValueInput(e.currentTarget.value);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('search', valueInput);
    callback(valueInput);
  };

  return (
    <form className="container_search" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        onChange={onChange}
        placeholder="Search bar"
        value={valueInput}
        className="input"
      />
    </form>
  );
}

export { SearchBar };
