import { useCallback, useEffect, useState } from 'react';

import { ListCard } from '../../components/listCard/ListCard';
import { IRouter, TCreateItem, IItemCard } from '../../type';
import { CreateCardValidation } from '../../components/CreateCardValidation/CreateCardValidation';

function CreateCardPage(props: IRouter): JSX.Element {
  useEffect(() => {
    props.callback(props.title);
  });

  const [listCard, setListCard] = useState(new Array<IItemCard>());

  const addCard = useCallback(
    (cardItem: TCreateItem) => {
      const id = listCard.length;
      const card = {
        id,
        title: cardItem.inputName,
        date: cardItem.date,
        typeRoom: cardItem.selectTypeRoom,
        description: cardItem.description,
        price: cardItem.price,
        likes: cardItem.inputPromo,
        view: 0,
        rating: 0,
        thumbnail: cardItem.inputFile,
        images: [],
      };
      setListCard([...listCard, card]);
    },
    [listCard]
  );
  return (
    <>
      <h2>Create card page</h2>
      <CreateCardValidation callback={addCard} />
      <ListCard data={listCard} />
    </>
  );
}

export { CreateCardPage };
