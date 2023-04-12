import { useGetAllProductsQuery } from '../../store/productsApi';
import { useAppSelector } from '../../hook';
import { IItemProduct } from '../../type';
import { ItemProduct } from '../itemProduct/ItemProduct';
import './ListProduct.scss';

interface IPropsListProduct {
  callback: (product: IItemProduct) => void;
}

function ListProduct(props: IPropsListProduct) {
  const valueSearch = useAppSelector((state) => state.searchInput);
  const { data } = useGetAllProductsQuery(valueSearch.value);
  const { callback } = props;
  return (
    <section className="cards">
      {data.products.map((item: IItemProduct) => (
        <ItemProduct item={item} onClick={callback} key={item.id} />
      ))}
    </section>
  );
}

export { ListProduct };
