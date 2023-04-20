import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { URL_API } from './settingsApi';
import { STATUS_REQUEST } from './type';
import { IItemProduct, IProductsListAPI } from 'type';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function (search?: string) {
    let strUrl = `${URL_API}/products`;
    if (search) {
      strUrl += `/search?q=${search}`;
    }
    const response = await fetch(strUrl);

    return (await response.json()) as IProductsListAPI;
  }
);

const listProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: Array<IItemProduct>(),
    status: STATUS_REQUEST.loading,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = STATUS_REQUEST.loading;
      state.error = '';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = STATUS_REQUEST.resolved;
      state.products = action.payload.products;
    });
  },
});

export default listProductsSlice.reducer;
