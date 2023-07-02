import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    wishlist: []
}



const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addWishlist: (state, action) => {
            const existingProduct = state.wishlist.find(
                (product) => product._id === action.payload._id
            );
            if (existingProduct) {
                toast.warning("Already added this product to the wishlist", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                state.wishlist.push(action.payload);

                // Toast configuration
                toast.success("Added the new product to the wishlist", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        },

        deleteWishlist: (state, action) => {
            const updatedWishlist = state.wishlist.filter(
              (product) => product._id !== action.payload
            );
            state.wishlist = updatedWishlist;
          },
    },
});










export const { addWishlist, deleteWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer