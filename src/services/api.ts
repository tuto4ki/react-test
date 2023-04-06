import { IItemProduct } from '../../src/type';
const BASE_URL = 'https://dummyjson.com';

async function getApiDate(url: string) {
  const data: { products: IItemProduct[] } = await fetch(`${BASE_URL}/${url}`).then((res) => {
    return res.json();
  });
  return data.products;
}

async function getApiItem(url: string) {
  const data: IItemProduct = await fetch(`${BASE_URL}/${url}`).then((res) => {
    return res.json();
  });
  return data;
}

export { getApiDate, getApiItem };
