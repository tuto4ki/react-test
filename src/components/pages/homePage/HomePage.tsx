import { useEffect, useState } from 'react';

import { SearchBar } from '../../searchBar/SearchBar';
import { IRouter, IItemProduct } from 'type';
import { ListProduct } from '../../listProduct/ListProduct';
import { ModalWindow } from '../../UI/modalWindow/ModalWindow';
import { DetailedCard } from '../../detailedCard/DetailedCard';
import { useAppDispatch } from '../../../hook';
import { fetchProduct } from '../../../store/productSlice';

function HomePage(props: IRouter): JSX.Element {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    props.callback(props.title);
  });

  const showDetailedProduct = (product: IItemProduct) => {
    setIsModalActive(true);
    dispatch(fetchProduct(product.id));
  };
  return (
    <>
      <h2>Home page</h2>
      <SearchBar />
      <ListProduct callback={showDetailedProduct} />
      {isModalActive && (
        <ModalWindow active={isModalActive} setActive={setIsModalActive}>
          <DetailedCard />
        </ModalWindow>
      )}
    </>
  );
}

export { HomePage };
