import React, { useEffect, useRef, useState } from 'react';

import { MyInput } from '../UI/input/MyInput';
import './SearchBar.css';

function SearchBar(): JSX.Element {
  const [valueInput, setValueInput] = useState(
    localStorage.getItem('search') ? String(localStorage.getItem('search')) : ''
  );
  const ref = useRef<string>('');

  useEffect(() => {
    ref.current = valueInput;
  }, [valueInput]);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', ref.current);
    };
  }, []);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValueInput(e.currentTarget.value);
  };

  return (
    <div className="container_search">
      <MyInput
        type="text"
        name="search"
        onChange={onChange}
        placeholder="Search bar"
        value={valueInput}
        className="input"
      />
    </div>
  );
}

export { SearchBar };
