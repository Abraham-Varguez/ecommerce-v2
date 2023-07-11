//This will be the entry point of redux and will wrap around the root/main component on the index.js , ex: <Provider></Provider>

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";



//Biolerplate variable to help connect with react redux 😵‍💫
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
