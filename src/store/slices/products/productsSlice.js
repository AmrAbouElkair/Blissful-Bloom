import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  getCategories,
  getSubCategories,
  getProduct,
} from "./productsFetching";

const initialState = {
  products: [],
  categories: [],
  subCategories: [],
  product: {},
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getSubCategories.fulfilled, (state, action) => {
        state.subCategories = action.payload;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export const productsArray = initialState.products;

export default productSlice.reducer;
