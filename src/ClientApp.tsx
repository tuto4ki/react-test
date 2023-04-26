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

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={setupStore(window.__PRELOADED_STATE__)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
