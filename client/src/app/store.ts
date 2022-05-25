import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";

export const rootReducer = {
  products: productsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
