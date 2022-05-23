import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllProducts from "@/api/products";
import { Product } from "@/@types/dto";

type ProductsState = {
  status: "idle" | "loading" | "success" | "failed";
  products: Product[];
};

const initialState: ProductsState = {
  status: "idle",
  products: [],
};

export const getProducts = createAsyncThunk<Product[], void>(
  "products/getProducts",
  async () => {
    const data = await getAllProducts();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
