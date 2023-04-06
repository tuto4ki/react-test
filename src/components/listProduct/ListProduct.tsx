import { IItemProduct } from '../../type';
import { ItemProduct } from '../itemProduct/ItemProduct';
import './ListProduct.css';

interface IPropsListNews {
  data: Array<IItemProduct>;
  newsShow: (news: IItemProduct) => void;
}

function ListProduct(props: IPropsListNews) {
  const { data, newsShow } = props;
  return (
    <section className="cards">
      {data.map((item) => (
        <ItemProduct item={item} onClick={newsShow} key={item.id} />
      ))}
    </section>
  );
}

export { ListProduct };
