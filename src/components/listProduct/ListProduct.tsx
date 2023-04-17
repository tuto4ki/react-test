import { useGetAllProductsQuery } from '../../store/productsApi';
import { useAppSelector } from '../../hook';
import { IItemProduct } from '../../type';
import { ItemProduct } from '../itemProduct/ItemProduct';
import { Loader } from '../../components/UI/loader/Loader';
import './ListProduct.scss';

interface IPropsListProduct {
  callback: (product: IItemProduct) => void;
}

function ListProduct({ callback }: IPropsListProduct) {
  const valueSearch = useAppSelector((state) => state.searchInput);
  const { data, isFetching } = useGetAllProductsQuery(valueSearch.value);
  return (
    <>
      {isFetching && <Loader />}
      {data?.products.length ? (
        <section className="cards">
          {data.products.map((item: IItemProduct) => (
            <ItemProduct item={item} onClick={callback} key={item.id} />
          ))}
        </section>
      ) : (
        !isFetching && 'Product not found'
      )}
    </>
  );
}

export { ListProduct };
