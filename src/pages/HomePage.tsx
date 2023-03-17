import { ListCard } from '../components/listCard/ListCard';
import React from 'react';
import { SearchBar } from '../components/searchBar/SearchBar';
import { IRouter } from 'type';

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
        <ListCard />
      </>
    );
  }
}

export { HomePage };
