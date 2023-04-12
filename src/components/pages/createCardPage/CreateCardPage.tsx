import { useEffect } from 'react';

import { ListCard } from '../../listCard/ListCard';
import { IRouter } from '../../../type';
import { CreateCardForm } from '../../createCardForm/CreateCardForm';

function CreateCardPage(props: IRouter): JSX.Element {
  useEffect(() => {
    props.callback(props.title);
  });

  return (
    <>
      <h2>Create card page</h2>
      <CreateCardForm />
      <ListCard />
    </>
  );
}

export { CreateCardPage };
