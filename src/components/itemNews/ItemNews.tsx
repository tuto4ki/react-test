import { IItemNews } from 'type';
import './ItemNews.css';

function ItemNews(props: IItemNews): JSX.Element {
  return (
    <div className="item-card-news" data-testid="item-card-news">
      {props.urlToImage && (
        <img src={props.urlToImage} alt={props.title} className="item-picture-news" />
      )}
      <h4 className="item-container-news item-title-news">{props.title}</h4>
      <div className="item-container-news">
        <div className="item-description-news">
          <p>Source:</p>
          <a href={props.url} className="news-link-news">
            {props.source.name}
          </a>
          <br />
          {props.publishedAt}
        </div>
      </div>
    </div>
  );
}

export { ItemNews };
