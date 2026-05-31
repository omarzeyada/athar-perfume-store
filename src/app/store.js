import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/add/CartSlice";
import productReducer from "../features/add/ProductSlice";
import userReducer from "../features/add/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
  },
});
