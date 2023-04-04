import { IItemNews } from '../../src/type';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = '119b39baa7b14aa383e7e900d255d34a';

async function getApiDate(url: string) {
  const data: { articles: IItemNews[] } = await fetch(`${BASE_URL}${url}&apiKey=${API_KEY}`).then(
    (res) => {
      return res.json();
    }
  );
  return data;
}

export { getApiDate };
