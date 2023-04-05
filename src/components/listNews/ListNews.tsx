import { IItemNews } from '../../type';
import { ItemNews } from '../../components/itemNews/ItemNews';
import './ListNews.css';

interface IPropsListNews {
  data: Array<IItemNews>;
  newsShow: (news: IItemNews) => void;
}

function ListNews(props: IPropsListNews) {
  const { data, newsShow } = props;
  return (
    <section className="cards">
      {data.map((item) => (
        <ItemNews news={item} onClick={newsShow} key={item.url} />
      ))}
    </section>
  );
}

export { ListNews };
