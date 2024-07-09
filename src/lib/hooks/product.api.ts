import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: 'product-api',
  tagTypes: ['product'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://www.fruityvice.com/api/fruit/all'}),
  endpoints: builder => ({
    GetProducts: builder.query<null, null>({
      query: () => `/`,
      providesTags: ['product']
    })
  })
})

export const {
  useGetProductsQuery
} = productApi