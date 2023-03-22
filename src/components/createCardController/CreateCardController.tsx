import { CreateCardComponent } from '../createCardComponent/CreateCardComponent';
import React from 'react';
import { TCreateItem } from '../../type';

class CreateCardController extends React.Component {
  onSubmit(state: TCreateItem): void {
    console.log(state);
  }

  render(): React.ReactNode {
    return <CreateCardComponent callback={this.onSubmit} />;
  }
}

export { CreateCardController };
