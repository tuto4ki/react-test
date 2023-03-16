import React from 'react';
import './ListCard.css';
import dataCard from '../../assets/json/card.json';
import { ItemCard } from '../itemCard/ItemCard';

class ListCard extends React.Component {
  state = {
    data: dataCard,
  };

  render(): React.ReactNode {
    return (
      <div className="cards">
        {this.state.data.products.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </div>
    );
  }
}

export { ListCard };
