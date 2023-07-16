import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

//Information for the server
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: `POST`,
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

//useGetProductsQuery is what we will use to fecth the data from here and then from the prduct object information
export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  usersApiSlice;
