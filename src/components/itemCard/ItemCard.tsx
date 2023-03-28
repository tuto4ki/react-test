import React from 'react';
import { IItemCard } from 'type';
import './ItemCard.css';
import '../../assets/images/iconHeart.svg';

class ItemCard extends React.Component<IItemCard> {
  constructor(props: IItemCard) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="item-card" data-testid="item-card">
        <img src={this.props.thumbnail} alt={this.props.title} className="item-picture" />
        <div className="item-container item-price">
          <p className="price">${this.props.price}</p>
          {this.props.date}
        </div>
        <div className="item-container">
          <h4 className="item-title">{this.props.title}</h4>
          <div className="item-description">
            {this.props.typeRoom}
            <br />
            {this.props.description}
          </div>
        </div>
        <div className="item-container statistics">
          <span className="icon-heart">{this.props.likes >= 0 ? this.props.likes : ''}</span>
          <span className="icon-view">{this.props.view}</span>
        </div>
      </div>
    );
  }
}

export { ItemCard };
