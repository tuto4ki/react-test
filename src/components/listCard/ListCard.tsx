import { ItemCard } from '../itemCard/ItemCard';
import { IItemCard } from '../../type';
import './ListCard.css';

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
