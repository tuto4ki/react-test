import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL_API } from './settingsApi';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_API }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (search = '') => {
        return `products${search && `/search?q=${search}`}`;
      },
    }),
    getProduct: build.query({
      query: (id = '') => `product/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
