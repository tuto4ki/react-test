import { IItemNews } from 'type';
import './DetailedCard.css';

interface IPropsDetailedCard {
  news: IItemNews | null;
}

function DetailedCard(props: IPropsDetailedCard): JSX.Element {
  if (props.news) {
    return <div>{props.news.description}</div>;
  }
  return <p>News not found</p>;
}

export { DetailedCard };
