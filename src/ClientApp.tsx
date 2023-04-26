import { hydrateRoot } from 'react-dom/client';
import { PreloadedState } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { RootState, setupStore } from './store/store';
import App from './App';

declare global {
  interface Window {
    __PRELOADED_STATE__: PreloadedState<RootState>;
  }
}

const store = setupStore(window.__PRELOADED_STATE__);
// delete window.__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
