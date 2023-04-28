import { ItemCard } from '../itemCard/ItemCard';
import { useAppSelector } from '../../hook';
import './ListCard.scss';
import { IItemCard } from 'type';

function ListCard() {
  const listCard = useAppSelector((state) => state.listCard.list);
  return (
    <section className="cards">
      {listCard.map((item: IItemCard, key: number) => (
        <ItemCard {...item} key={key} />
      ))}
    </section>
  );
}

export { ListCard };
