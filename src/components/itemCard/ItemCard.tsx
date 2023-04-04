import { IItemCard } from 'type';
import './ItemCard.css';
import '../../assets/images/iconHeart.svg';

function ItemCard(props: IItemCard): JSX.Element {
  return (
    <div className="item-card" data-testid="item-card">
      <img src={props.thumbnail} alt={props.name} className="item-picture" />
      <div className="item-container item-price">
        <p className="price">${props.price}</p>
        {props.date}
      </div>
      <div className="item-container">
        <h4 className="item-title">{props.name}</h4>
        <div className="item-description">
          {props.typeRoom}
          <br />
          {props.description}
        </div>
      </div>
      <div className="item-container statistics">
        <span className="icon-heart" role="role-likes">
          {props.likes >= 0 ? props.likes : ''}
        </span>
        <span className="icon-view">{props.view}</span>
      </div>
    </div>
  );
}

export { ItemCard };
