import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

// import { IItemNews } from 'type';
// import { getApiDate } from '../../services/api';
import { MyInput } from '../UI/input/MyInput';
import './SearchBar.css';

function SearchBar(props: { callback: { (pathSearch: string): void } }): JSX.Element {
  const [valueInput, setValueInput] = useState<string>(
    localStorage.getItem('search') ? String(localStorage.getItem('search')) : ''
  );
  // const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    console.log(valueInput);
    e.preventDefault();
    props.callback(`everything?q=${valueInput}`);
    /*
    setIsLoading(true);
    try {
      getApiDate(`everything?q=${valueInput}`).then((data) => {
        props.callback(data.articles);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    */
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
