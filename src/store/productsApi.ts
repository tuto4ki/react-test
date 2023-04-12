import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
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
