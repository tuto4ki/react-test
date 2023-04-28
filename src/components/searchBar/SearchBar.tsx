import React, { ChangeEvent, useState } from 'react';

import { Input } from '../UI/input/Input';
import { useAppDispatch, useAppSelector } from '../../hook';
import { changeSearchInput } from '../../store/searchInputSlice';
import { fetchProducts } from '../../store/listProductsSlice';

import './SearchBar.scss';

function SearchBar(): JSX.Element {
  const valueSelector = useAppSelector((state) => state.searchInput);
  const [valueInput, setValueInput] = useState<string>(valueSelector.value);
  const dispatch = useAppDispatch();

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValueInput(e.currentTarget.value);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeSearchInput(valueInput));
    dispatch(fetchProducts(valueInput));
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
