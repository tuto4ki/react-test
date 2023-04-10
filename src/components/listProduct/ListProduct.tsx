import { IItemProduct } from '../../type';
import { ItemProduct } from '../itemProduct/ItemProduct';
import './ListProduct.scss';

interface IPropsListProduct {
  data: Array<IItemProduct>;
  callback: (product: IItemProduct) => void;
}

function ListProduct(props: IPropsListProduct) {
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
