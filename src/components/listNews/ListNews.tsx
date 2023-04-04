import { IItemNews } from '../../type';
import './ListNews.css';
import { ItemNews } from '../../components/itemNews/ItemNews';

function ListNews(props: { data: Array<IItemNews> }) {
  return (
    <section className="cards">
      {props.data.map((item) => (
        <ItemNews {...item} key={item.url} />
      ))}
    </section>
  );
}

export { ListNews };
