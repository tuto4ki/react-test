import { IItemProduct } from '../../type';
import { ItemProduct } from '../itemProduct/ItemProduct';
import './ListProduct.css';

interface IPropsListNews {
  data: Array<IItemProduct>;
  callback: (product: IItemProduct) => void;
}

function ListProduct(props: IPropsListNews) {
  const { data, callback } = props;
  return (
    <section className="cards">
      {data.map((item) => (
        <ItemProduct item={item} onClick={callback} key={item.id} />
      ))}
    </section>
  );
}

export { ListProduct };
