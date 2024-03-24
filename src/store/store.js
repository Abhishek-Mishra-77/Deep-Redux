import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import cartReducer from "./cartSlice";
import thunkReducer from "./thunkSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer,
    thunk: thunkReducer,
  },
});
