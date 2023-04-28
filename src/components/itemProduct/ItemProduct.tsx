import { IItemProduct } from 'type';

import './ItemProduct.scss';

interface IPropsItemProduct {
  item: IItemProduct;
  onClick: (product: IItemProduct) => void;
}

function ItemProduct(props: IPropsItemProduct): JSX.Element {
  const { item, onClick } = props;
  return (
    <div
      className="item-card-product"
      data-testid="item-card-product"
      onClick={() => onClick(item)}
    >
      <img src={item.thumbnail} alt={item.title} className="item-picture-product" />
      <div className="item-container-product item-container-bg">
        <h4 className="item-title-product">{item.title}</h4>
        <p className="price">${item.price}</p>
      </div>
      <div className="item-container-product">
        <div className="item-description-product">
          <p>Brand: {item.brand}</p>
          <p>Category: {item.category}</p>
        </div>
      </div>
      <div className="item-card-container statistics-product">
        <span className="icon-heart" role="role-likes">
          {item.rating}
        </span>
        <span className="item-card-stock">Stock: {item.stock}</span>
      </div>
    </div>
  );
}

export { ItemProduct };
