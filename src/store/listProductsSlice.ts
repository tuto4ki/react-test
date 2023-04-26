import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice, createAsyncThunk } = (toolkitRaw as any).default ?? toolkitRaw; // eslint-disable-line
import type { PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { URL_API } from './settingsApi';
import { STATUS_REQUEST } from './type';
import { IItemProduct, IProductsListAPI } from 'type';

type TStateListProductsSlice = {
  products: IItemProduct[];
  status: STATUS_REQUEST;
  error: string;
};

export async function getProductsFetch(search?: string) {
  let strUrl = `${URL_API}/products`;
  if (search) {
    strUrl += `/search?q=${search}`;
  }
  const response = await fetch(strUrl);

  return (await response.json()) as IProductsListAPI;
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', getProductsFetch);

const listProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: Array<IItemProduct>(),
    status: STATUS_REQUEST.loading,
    error: '',
  },
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TStateListProductsSlice>) => {
    builder.addCase(fetchProducts.pending, (state: TStateListProductsSlice) => {
      state.status = STATUS_REQUEST.loading;
      state.error = '';
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state: TStateListProductsSlice, action: PayloadAction<IProductsListAPI>) => {
        state.status = STATUS_REQUEST.resolved;
        state.products = action.payload.products;
      }
    );
  },
});

export default listProductsSlice.reducer;
