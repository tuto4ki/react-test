import { rest } from 'msw';
import productList from '../../src/assets/json/productsListTest.json';
import product from '../../src/assets/json/productTest.json';

export const handlers = [
  rest.get('https://dummyjson.com/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productList));
  }),
  rest.get('https://dummyjson.com/products/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(product));
  }),
];
