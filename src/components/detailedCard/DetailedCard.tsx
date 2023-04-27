import { useAppSelector } from '../../hook';
import { Loader } from '../../components/UI/loader/Loader';
import { STATUS_REQUEST } from '../../store/type';
import './DetailedCard.scss';

function DetailedCard(): JSX.Element {
  const { status, product } = useAppSelector((state) => state.product);
  return (
    <>
      {status === STATUS_REQUEST.loading && <Loader />}
      {status === STATUS_REQUEST.resolved && product ? (
        <div className="detailed-card" data-testid="detailed-card">
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
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
}

export { DetailedCard };
