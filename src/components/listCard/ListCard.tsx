import React from 'react';
import './ListCard.css';
import dataCard from '../../assets/json/card.json';
import { ItemCard } from '../itemCard/ItemCard';

class ListCard extends React.Component {
  state = {
    data: dataCard.products,
  };

  render(): React.ReactNode {
    return (
      <section className="cards">
        {this.state.data.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </section>
    );
  }
}

export { ListCard };
