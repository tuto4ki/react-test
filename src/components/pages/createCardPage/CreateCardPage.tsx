import { useEffect } from 'react';

import { useAppDispatch } from '../../../hook';
import { ListCard } from '../../listCard/ListCard';
import { IRouter, IItemCard } from '../../../type';
import { CreateCardForm } from '../../createCardForm/CreateCardForm';
import { addListCard } from '../../../store/listCardSlice';

function CreateCardPage(props: IRouter): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    props.callback(props.title);
  });

  const addCard = (cardItem: IItemCard) => {
    dispatch(addListCard(cardItem));
  };
  return (
    <>
      <h2>Create card page</h2>
      <CreateCardForm callback={addCard} />
      <ListCard />
    </>
  );
}

export { CreateCardPage };
