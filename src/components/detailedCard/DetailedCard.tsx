import './DetailedCard.scss';
import { useGetProductQuery } from '../../store/productsApi';
import { Loader } from '../../components/UI/loader/Loader';

interface IPropsDetailedCard {
  id: number;
}

function DetailedCard({ id }: IPropsDetailedCard): JSX.Element {
  const { data, isLoading } = useGetProductQuery(String(id));
  if (isLoading) {
    return <Loader />;
  }
  if (data) {
    return (
      <div className="detailed-card">
        <img src={data.thumbnail} alt={data.title} className="detailed-picture" />
        <div className="detailed-card-wrapper detailed-title-bg">
          <h4 className="detailed-title">{data.title}</h4>
          <p className="price">${data.price}</p>
        </div>
        <div className="detailed-card-wrapper">{data.description}</div>
        <div className="detailed-card-wrapper-line">
          <p>Brand: {data.brand}</p>
          <p>Category: {data.category}</p>
        </div>
        <div className="detailed-card-wrapper-line detailed-statistics">
          <span className="icon-heart" role="role-likes">
            {data.rating}
          </span>
          <span className="item-card-stock">Stock: {data.stock}</span>
        </div>
      </div>
    );
  }
  return <p>product not found</p>;
}

export { DetailedCard };
