
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./featchers/api/apiSlice";
import cartReducers from '../app/featchers/CartSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    products: cartReducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
