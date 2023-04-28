import { useAppSelector } from '../../hook';
import { IItemProduct } from '../../type';
import { ItemProduct } from '../itemProduct/ItemProduct';
import { Loader } from '../../components/UI/loader/Loader';
import { STATUS_REQUEST } from '../../store/type';

import './ListProduct.scss';

interface IPropsListProduct {
  callback: (product: IItemProduct) => void;
}

function ListProduct({ callback }: IPropsListProduct) {
  const { status, products } = useAppSelector((state) => state.listProduct);
  return (
    <>
      {status === STATUS_REQUEST.loading && <Loader />}
      {products.length ? (
        <section className="cards">
          {products.map((item: IItemProduct) => (
            <ItemProduct item={item} onClick={callback} key={item.id} />
          ))}
        </section>
      ) : (
        status === STATUS_REQUEST.resolved && 'Product not found'
      )}
    </>
  );
}

export { ListProduct };
