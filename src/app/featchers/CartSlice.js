import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(product => product._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const newProduct = { ...action.payload, quantity: 1 }; // Create a new object with quantity property
        state.products.push(newProduct);
      }
    }
  }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
