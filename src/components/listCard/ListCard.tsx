import { ItemCard } from '../itemCard/ItemCard';
import { useAppSelector } from '../../hook';

import './ListCard.scss';

function ListCard() {
  const listCard = useAppSelector((state) => state.listCard.list);
  return (
    <section className="cards">
      {listCard.map((item, key) => (
        <ItemCard {...item} key={key} />
      ))}
    </section>
  );
}

export { ListCard };
