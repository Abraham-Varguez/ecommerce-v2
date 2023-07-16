import { PRODUCTS_URL, ALL_PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

//THIS IS REPLACING THAT FETCH REQUEST AND AXIOS REQUEST, THIS ALL TO BE DONE ON REDUXX TOOL KIT
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: ALL_PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProducts: builder.query({
      query: ({ pageNumber }) => ({
        url: PRODUCTS_URL,
        params: {
          pageNumber,
        },
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

//useGetProductsQuery is what we will use to fecth the data from here and then from the prduct object information
export const {
  useGetAllProductsQuery,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useGetTopProductsQuery,
} = productsApiSlice;
