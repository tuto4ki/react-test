import { IItemProduct } from 'type';
import './DetailedCard.css';

interface IPropsDetailedCard {
  product: IItemProduct | null;
}

function DetailedCard(props: IPropsDetailedCard): JSX.Element {
  if (props.product) {
    const { product } = props;
    return (
      <div className="detailed-card">
        <img src={product.thumbnail} alt={product.title} className="detailed-picture" />
        <div className="detailed-card-wrapper detailed-title-bg">
          <h4 className="detailed-title">{product.title}</h4>
          <p className="price">${product.price}</p>
        </div>
        <div className="detailed-card-wrapper">{product.description}</div>
        <div className="detailed-card-wrapper-line">
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
        <div className="detailed-card-wrapper-line detailed-statistics">
          <span className="icon-heart" role="role-likes">
            {product.rating}
          </span>
          <span className="item-card-stock">Stock: {product.stock}</span>
        </div>
      </div>
    );
  }
  return <p>product not found</p>;
}

export { DetailedCard };
