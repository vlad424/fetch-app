import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "./product.type";

export const productApi = createApi({
  reducerPath: "product-api",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.cheapshark.com/api/1.0/games?title=starve",
    method: 'GET',
  }),
  endpoints: (builder) => ({
    GetProducts: builder.query<Array<Products>, number>({
      query: (id: number) => ``,
      providesTags: ["product"],
    
    }),
  }),
});

export const { useGetProductsQuery } = productApi;

//https://api.openbrewerydb.org/v1/breweries?per_page=10