import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import Express from 'express';
import { createServer as createViteServer } from 'vite';

import { setupStore } from './src/store/store';
import { getProductsFetch } from './src/store/listProductsSlice';

const STATUS_CODE = 200;

const PORT = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = Express();

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

let html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();

app.use(vite.middlewares);

app.use('./src/assets', Express.static(path.resolve(__dirname, './src/assets')));

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  html = await vite.transformIndexHtml(url, html);
  try {
    const productList = await getProductsFetch();
    const store = setupStore({ listProduct: productList, searchInput: { value: '' } });
    const preloadedState = store.getState();
    html = html.replace(
      '<!--__PRELOADED_STATE__-->',
      `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
      )}</script>`
    );
    const parts = html.split('not rendered');
    const { render } = await vite.ssrLoadModule(path.resolve(__dirname, './src/ServerApp.tsx'));

    res.write(parts[0]);
    const stream = await render(
      { url: url, store: store },
      {
        onShellReady() {
          stream.pipe(res);
        },
        onAllReady() {
          res.write(parts[1]);
          res.status(STATUS_CODE).end();
        },
      }
    );
  } catch (error) {
    vite.ssrFixStacktrace(error);
    next(error);
  }
});
app.listen(PORT);
