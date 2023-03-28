import { ListCard } from '../components/listCard/ListCard';
import React from 'react';
import { SearchBar } from '../components/searchBar/SearchBar';
import { IRouter } from 'type';
import dataCard from '../assets/json/card.json';

class HomePage extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return (
      <>
        <h2>Home page</h2>
        <SearchBar />
        <ListCard data={dataCard.products} />
      </>
    );
  }
}

export { HomePage };
