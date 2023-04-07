import { useCallback, useEffect, useState } from 'react';

import { ListCard } from '../../listCard/ListCard';
import { IRouter, IItemCard } from '../../../type';
import { CreateCardForm } from '../../createCardForm/CreateCardForm';

function CreateCardPage(props: IRouter): JSX.Element {
  useEffect(() => {
    props.callback(props.title);
  });

  const [listCard, setListCard] = useState(new Array<IItemCard>());

  const addCard = useCallback(
    (cardItem: IItemCard) => {
      const id = listCard.length;
      const card = {
        id,
        view: 0,
        rating: 0,
        images: [],
        ...cardItem,
      };
      setListCard([...listCard, card]);
    },
    [listCard]
  );
  return (
    <>
      <h2>Create card page</h2>
      <CreateCardForm callback={addCard} />
      <ListCard data={listCard} />
    </>
  );
}

export { CreateCardPage };
