import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { URL_API } from './settingsApi';
import { STATUS_REQUEST } from './type';
import { IItemProduct } from 'type';

export const fetchProduct = createAsyncThunk('product/fetchProduct', async function (id?: number) {
  if (!id) {
    return;
  }
  const response = await fetch(`${URL_API}/product/${id}`);

  return (await response.json()) as IItemProduct;
});

const initialProduct: IItemProduct = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: Array<string>(),
};

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: initialProduct,
    status: STATUS_REQUEST.loading,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = STATUS_REQUEST.loading;
      state.error = '';
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = STATUS_REQUEST.resolved;
      if (action.payload) {
        state.product = action.payload;
      }
    });
  },
});

export default productSlice.reducer;
