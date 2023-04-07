import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { MyInput } from '../UI/input/MyInput';
import './SearchBar.css';

function SearchBar(props: { callback: { (pathSearch: string): void } }): JSX.Element {
  const [valueInput, setValueInput] = useState<string>(
    localStorage.getItem('search') ? String(localStorage.getItem('search')) : ''
  );
  useEffect(() => {
    console.log(valueInput);
    if (valueInput) {
      props.callback(`products/search?q=${valueInput}`);
    } else {
      props.callback('products');
    }
  }, []);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValueInput(e.currentTarget.value);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('search', valueInput);
    props.callback(`products/search?q=${valueInput}`);
  };

  return (
    <form className="container_search" onSubmit={handleSubmit}>
      <MyInput
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
