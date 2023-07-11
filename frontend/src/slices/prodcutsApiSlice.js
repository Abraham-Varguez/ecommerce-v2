import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

//THIS IS REPLACING THAT FETCH REQUEST AND AXIOS REQUEST, THIS ALL TO BE DONE ON REDUXX TOOL KIT
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

//useGetProductsQuery is what we will use to fecth the data from here and then from the prduct object information
export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice;
