import cartSliceReducer from "./cartSlice.js";
import { configureStore } from "@reduxjs/toolkit";


const appStore = configureStore({
  reducer: {
    cart: cartSliceReducer,
  },
});
export default appStore;
