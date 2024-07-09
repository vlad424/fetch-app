import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: 'product-api',
  tagTypes: ['product'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.fruityvice.com/api/fruit/all',
    mode: 'cors',
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json')
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set("Accept", "application/json")
    }
  }),
  endpoints: builder => ({
    GetProducts: builder.query<null, number>({
      query: (id: number) => `/`,
      providesTags: ['product']
    })
  }),
  
})

export const {
  useGetProductsQuery
} = productApi