import { IItemNews } from 'type';
import './ItemNews.css';

interface IPropsItemNews {
  news: IItemNews;
  onClick: (news: IItemNews) => void;
}

function ItemNews(props: IPropsItemNews): JSX.Element {
  const { news, onClick } = props;
  return (
    <div className="item-card-news" data-testid="item-card-news" onClick={() => onClick(news)}>
      {news.urlToImage && (
        <img src={news.urlToImage} alt={news.title} className="item-picture-news" />
      )}
      <h4 className="item-container-news item-title-news">{news.title}</h4>
      <div className="item-container-news">
        <div className="item-description-news">
          <p>Source:</p>
          <a href={news.url} className="news-link-news">
            {news.source.name}
          </a>
          <br />
          {news.publishedAt}
        </div>
      </div>
    </div>
  );
}

export { ItemNews };
