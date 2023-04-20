import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import listCardReducer from './listCardSlice';
import searchInputReducer from './searchInputSlice';
import listProductsSlice from './listProductsSlice';
import productSlice from './productSlice';

const rootReducer = combineReducers({
  listCard: listCardReducer,
  searchInput: searchInputReducer,
  listProduct: listProductsSlice,
  product: productSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
