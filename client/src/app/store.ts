import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";

export const rootReducer = {
  products: productReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
