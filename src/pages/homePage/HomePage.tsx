import { useEffect, useState } from 'react';

import { SearchBar } from '../../components/searchBar/SearchBar';
import { IRouter, IItemNews } from 'type';
import { getApiDate } from '../../services/api';
import { ListNews } from '../../components/listNews/ListNews';

function HomePage(props: IRouter): JSX.Element {
  const [listCard, setListCard] = useState<IItemNews[]>([]);
  useEffect(() => {
    props.callback(props.title);
  });

  useEffect(() => {
    try {
      getApiDate('top-headlines?country=us').then((data) => {
        setListCard(data.articles);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const callback = (data: IItemNews[]) => {
    setListCard(data);
  };

  return (
    <>
      <h2>Home page</h2>
      <SearchBar callback={callback} />
      <ListNews data={listCard} />
    </>
  );
}

export { HomePage };
