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
                const newProduct = { ...action.payload, quantity: 1 }; 
                state.products.push(newProduct);
            }
        },
        incrementQuantity: (state, action) => {
            const {payload}=action
            const existingProduct =  state.products.find(product => product._id === payload)
                if(existingProduct){
                    existingProduct.quantity += 1
                }
        },
        decrementQuantity: (state, action) => {
            const {payload}=action
            const existingProduct =  state.products.find(product => product._id === payload)
               if(existingProduct){
                    if(existingProduct.quantity > 1){
                        existingProduct.quantity -= 1
                    }else{
                        state.products.filter(product => product._id === existingProduct._id)
                    }
               }
        },
        deleteProduct:(state,action)=>{
           const myData= state.products.filter(product => product._id !== action.payload)
          return {
            ...state,
            products:myData
          }
        }
    }

});

export const { addProduct,incrementQuantity ,decrementQuantity,deleteProduct} = productsSlice.actions;
export default productsSlice.reducer;
