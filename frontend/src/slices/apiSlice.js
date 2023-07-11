//WE USE SLCIES FOR THE REDUX TOOL KIT AND THIS A WAY TO ORGANIZE THE STATES IN REACT AND IS A COLLECTION OF REDUCER FUNCTION AND ACTIONS THAT
//ARE RELATED TO EACHOTHER

//This will be the parent to the other API slices we will make
//This will help allow us to make request to our backend APIs a

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  //used to define the type of data that will be fetching from the API
  tagTypes: ["Product", "Order", "User"],
  //This will help us automatically fetch out data, so we done need to manually handel errors and requests
  endpoints: (builder) => ({}),
});
