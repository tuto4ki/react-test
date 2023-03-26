import { CreateCardComponent } from '../createCardComponent/CreateCardComponent';
import React from 'react';
import { IFormCallback, TCreateItem } from '../../type';

class CreateCardController extends React.Component<IFormCallback> {
  constructor(props: IFormCallback) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(state: TCreateItem): void {
    // validatin form
    this.props.callback(state);
  }

  render(): React.ReactNode {
    return <CreateCardComponent callback={this.onSubmit} />;
  }
}

export { CreateCardController };
