import { createSlice } from "@reduxjs/toolkit";
import { productsArray } from "../products/productsSlice";

const initialState = {
  products: productsArray,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          desc: newProduct.desc,
          img: newProduct.img,
          quantity: newProduct.quantity,
        });
      } else {
        existingProduct.quantity++;
      }
    },
    increment(state, action) {
      const item = action.payload;
      let existingProduct = state.products.find(
        (product) => product.id === item.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== item.id
      );
    },
    decrememnt(state, action) {
      const item = action.payload;
      let existingProduct = state.products.find(
        (product) => product.id === item.id
      );
      if (existingProduct) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity === 0) {
          state.products = state.products.filter(
            (product) => product.id !== item.id
          );
        }
      }
    },
    resetCart(state) {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart, increment, decrememnt } =
  cartSlice.actions;

export default cartSlice.reducer;
