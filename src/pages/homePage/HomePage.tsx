import { useEffect, useState } from 'react';

import { SearchBar } from '../../components/searchBar/SearchBar';
import { IRouter, IItemNews } from 'type';
import { getApiDate } from '../../services/api';
import { ListNews } from '../../components/listNews/ListNews';
import { ModalWindow } from '../../components/modalWindow/ModalWindow';
import { DetailedCard } from '../../components/detailedCard/DetailedCard';

const TIMEOUT = 500;

function HomePage(props: IRouter): JSX.Element {
  const [listCard, setListCard] = useState<IItemNews[]>([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDataFound, setIsDataFound] = useState<boolean>(true);
  const [newsShow, setNewsShow] = useState<IItemNews | null>(null);
  useEffect(() => {
    props.callback(props.title);
  });

  useEffect(() => {
    search('top-headlines?country=us');
  }, []);

  const search = (pathSearch: string) => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        getApiDate(pathSearch).then((data) => {
          setListCard(data.articles);
          if (data.articles.length) {
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

  const showDetailedNews = (news: IItemNews) => {
    setNewsShow(news);
    setIsModalActive(true);
  };

  return (
    <>
      <h2>Home page</h2>
      <SearchBar callback={search} />
      {isLoading ? 'Loading...' : ''}
      {isDataFound ? <ListNews data={listCard} newsShow={showDetailedNews} /> : 'News not found'}
      <ModalWindow active={isModalActive} setActive={setIsModalActive}>
        <DetailedCard news={newsShow} />
      </ModalWindow>
    </>
  );
}

export { HomePage };
