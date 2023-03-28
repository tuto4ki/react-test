import React from 'react';
import './ListCard.css';
import { ItemCard } from '../itemCard/ItemCard';
import { IItemCard } from '../../type';

function ListCard(props: { data: Array<IItemCard> }) {
  return (
    <section className="cards">
      {props.data.map((item) => (
        <ItemCard {...item} key={item.id} />
      ))}
    </section>
  );
}

export { ListCard };
