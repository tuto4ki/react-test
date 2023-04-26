import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { RenderToPipeableStreamOptions } from 'react-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';

import App from './App';

interface IRenderProps {
  url: string;
  store: ToolkitStore;
}

export const render = ({ url, store }: IRenderProps, opts: RenderToPipeableStreamOptions) => {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
};
