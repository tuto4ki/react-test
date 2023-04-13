import { useEffect, useState } from 'react';

import { SearchBar } from '../../searchBar/SearchBar';
import { IRouter, IItemProduct } from 'type';
import { ListProduct } from '../../listProduct/ListProduct';
import { ModalWindow } from '../../UI/modalWindow/ModalWindow';
import { DetailedCard } from '../../detailedCard/DetailedCard';

function HomePage(props: IRouter): JSX.Element {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [productShow, setProductShow] = useState<number | null>(null);

  useEffect(() => {
    props.callback(props.title);
  });

  const showDetailedProduct = (product: IItemProduct) => {
    setIsModalActive(true);
    setProductShow(product.id);
  };
  return (
    <>
      <h2>Home page</h2>
      <SearchBar />
      <ListProduct callback={showDetailedProduct} />
      {isModalActive && (
        <ModalWindow active={isModalActive} setActive={setIsModalActive}>
          {productShow && <DetailedCard id={productShow} />}
        </ModalWindow>
      )}
    </>
  );
}

export { HomePage };
