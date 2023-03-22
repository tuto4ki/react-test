import { ListCard } from '../../components/listCard/ListCard';
import React from 'react';
import { IRouter } from 'type';
import { CreateCardController } from '../../components/createCardController/CreateCardController';

class CreateCardPage extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return (
      <>
        <h2>Create card page</h2>
        <CreateCardController />
        <ListCard />
      </>
    );
  }
}

export { CreateCardPage };
