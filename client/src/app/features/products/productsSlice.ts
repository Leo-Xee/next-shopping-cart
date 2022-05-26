import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/@types/dto";
import productService from "@/services/productService";

type ProductsState = {
  status: "idle" | "loading" | "success" | "failed";
  products: Product[];
};

const initialState: ProductsState = {
  status: "idle",
  products: [],
};

export const getAllProducts = createAsyncThunk<Product[], void>(
  "products/getAllProducts",
  async () => {
    const data = await productService.getAllProducts();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.products = payload;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
