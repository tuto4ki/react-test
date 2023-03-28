import { ListCard } from '../../components/listCard/ListCard';
import React from 'react';
import { IRouter, TCreateItem, IItemCard } from '../../type';
import { CreateCardValidation } from '../../components/CreateCardValidation/CreateCardValidation';

class CreateCardPage extends React.Component<IRouter> {
  state = {
    data: new Array<IItemCard>(),
  };

  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
    this.addCard = this.addCard.bind(this);
  }

  addCard(state: TCreateItem): void {
    const cards = this.state.data;
    cards.push({
      id: this.state.data.length,
      title: state.inputName,
      date: state.date,
      typeRoom: state.selectTypeRoom,
      description: state.description,
      price: state.price,
      likes: state.inputPromo,
      view: 0,
      rating: 0,
      thumbnail: state.inputFile,
      images: [],
    });
    this.setState({ data: cards });
  }

  render(): React.ReactNode {
    return (
      <>
        <h2>Create card page</h2>
        <CreateCardValidation callback={this.addCard} />
        <ListCard data={this.state.data} />
      </>
    );
  }
}

export { CreateCardPage };
