import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";
//This is where we will initially store the data locally in string format and then we need parse it in JSON format
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //This function will be to add the item cart and displaying the any other items already stored in to the local sotrage
    addToCart: (state, action) => {
      //Will send the item in this variable
      const item = action.payload;
      //This will then find the id of the specific item by matching the id number
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        //
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => {
        return x._id !== action.payload;
      });
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
