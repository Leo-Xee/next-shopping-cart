import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
