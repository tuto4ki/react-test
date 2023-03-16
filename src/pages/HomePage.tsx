import { ListCard } from '../components/listCard/ListCard';
import React from 'react';
import { SearchBar } from '../components/SearchBar';

class HomePage extends React.Component {
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
