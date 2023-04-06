import { useEffect, useState } from 'react';

import { SearchBar } from '../../components/searchBar/SearchBar';
import { IRouter, IItemProduct } from 'type';
import { getApiDate, getApiItem } from '../../services/api';
import { ListProduct } from '../../components/listProduct/ListProduct';
import { ModalWindow } from '../../components/UI/modalWindow/ModalWindow';
import { DetailedCard } from '../../components/detailedCard/DetailedCard';
import { Loader } from '../../components/UI/loader/Loader';

const TIMEOUT = 500;

function HomePage(props: IRouter): JSX.Element {
  const [listCard, setListCard] = useState<IItemProduct[]>([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDataFound, setIsDataFound] = useState<boolean>(true);
  const [newsShow, setNewsShow] = useState<IItemProduct | null>(null);
  useEffect(() => {
    props.callback(props.title);
  });

  useEffect(() => {
    search('products');
  }, []);

  const search = (pathSearch: string) => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        getApiDate(pathSearch).then((data) => {
          setListCard(data);
          if (data.length) {
            setIsDataFound(true);
          } else {
            setIsDataFound(false);
          }
        });
      } catch (error) {
        console.log(error);
        setIsDataFound(false);
      } finally {
        setIsLoading(false);
      }
    }, TIMEOUT);
  };

  const showDetailedNews = (product: IItemProduct) => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        getApiItem(`product/${product.id}`).then((item) => {
          setNewsShow(item);
          setIsModalActive(true);
        });
      } catch (error) {
        console.log(error);
        setIsDataFound(false);
      } finally {
        setIsLoading(false);
      }
    }, TIMEOUT);
  };

  return (
    <>
      <h2>Home page</h2>
      <SearchBar callback={search} />
      {isLoading ? <Loader /> : ''}
      {isDataFound ? (
        <ListProduct data={listCard} newsShow={showDetailedNews} />
      ) : (
        'Product not found'
      )}
      <ModalWindow active={isModalActive} setActive={setIsModalActive}>
        <DetailedCard product={newsShow} />
      </ModalWindow>
    </>
  );
}

export { HomePage };
