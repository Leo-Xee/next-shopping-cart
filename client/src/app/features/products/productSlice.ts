import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/@types/dto";
import productService from "@/services/productService";

type ProductState = {
  status: "idle" | "loading" | "success" | "failed";
  products: Product[];
};

const initialState: ProductState = {
  status: "idle",
  products: [],
};

export const getAllProducts = createAsyncThunk<Product[], void>(
  "product/getAllProducts",
  async () => {
    const data = await productService.getAllProducts();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
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

export default productSlice.reducer;
