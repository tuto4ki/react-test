import { IItemNews } from 'type';
import './DetailedCard.css';

interface IPropsDetailedCard {
  news: IItemNews | null;
}

function DetailedCard(props: IPropsDetailedCard): JSX.Element {
  if (props.news) {
    const { news } = props;
    return (
      <div className="detailed-card">
        <img src={news.urlToImage} alt={news.title} className="detailed-picture" />
        <h4 className="detailed-title">{news.title}</h4>
        <div className="detailed-description">
          {news.description}
          <br />
          {news.content}
        </div>
        <div className="detailed-source">
          <p>Data publication: {news.publishedAt}</p>
          <p>Author: {news.author}</p>
          <p>
            Source:
            <a href={news.url} className="detailed_link">
              {news.source.name}
            </a>
          </p>
        </div>
      </div>
    );
  }
  return <p>News not found</p>;
}

export { DetailedCard };
