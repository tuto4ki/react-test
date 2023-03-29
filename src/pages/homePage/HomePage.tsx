import { useEffect } from 'react';

import { ListCard } from '../../components/listCard/ListCard';
import { SearchBar } from '../../components/searchBar/SearchBar';
import { IRouter } from 'type';
import dataCard from '../../assets/json/card.json';

function HomePage(props: IRouter): JSX.Element {
  useEffect(() => {
    props.callback(props.title);
  });
  return (
    <>
      <h2>Home page</h2>
      <SearchBar />
      <ListCard data={dataCard.products} />
    </>
  );
}

export { HomePage };
