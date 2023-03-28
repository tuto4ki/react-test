import React from 'react';
import './ListCard.css';
import { ItemCard } from '../itemCard/ItemCard';
import { IItemCard } from '../../type';

class ListCard extends React.Component<{ data: Array<IItemCard> }> {
  constructor(props: { data: Array<IItemCard> }) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <section className="cards">
        {this.props.data.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </section>
    );
  }
}

export { ListCard };
