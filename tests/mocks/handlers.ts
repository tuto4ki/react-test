import { rest } from 'msw';

import productsAllJSON from '../../src/assets/json/productsListTest.json';
import productJSON from '../../src/assets/json/productTest.json';
import productSearchJSON from '../../src/assets/json/productSearchTest.json';
import { URL_API } from '../../src/store/settingsApi';

export const handlers = [
  rest.get(`${URL_API}/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productsAllJSON), ctx.delay(150));
  }),
  rest.get(`${URL_API}/products/search`, (req, res, ctx) => {
    const searchStr = req.url.searchParams.get('q');
    if (searchStr === 'phone') {
      return res(ctx.status(200), ctx.json(productSearchJSON), ctx.delay(150));
    }
    return res(ctx.status(200), ctx.json(productsAllJSON), ctx.delay(150));
  }),
  rest.get(`${URL_API}/product/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productJSON));
  }),
];
