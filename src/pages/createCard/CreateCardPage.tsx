import { CreateCardForm } from '../../components/createCardForm/CreateCardForm';
import React from 'react';
import { IRouter } from 'type';

class CreateCardPage extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return (
      <>
        <h2>Create card page</h2>
        <div>dkn</div>
        <CreateCardForm />
      </>
    );
  }
}

export { CreateCardPage };
