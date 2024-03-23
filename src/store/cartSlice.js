import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totolCart: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const existing = state.carts.find(
        (cart) => cart.id === action.payload.id
      );
      if (existing) {
        existing.count++;
      } else {
        const newProduct = {
          id: action.payload.id,
          category: action.payload.category,
          image: action.payload.thumbnail,
          count: 1,
          rating: action.payload.rating,
          price: action.payload.price,
        };
        state.carts.push(newProduct);
      }
      state.totolCart = state.carts.length;
    },
    allProducts: (state, action) => {
      state.products = action.payload;
    },
    increaseQuantity: (state, action) => {
      const existingPro = state.carts.find(
        (product) => product.id === action.payload
      );
      if (existingPro) {
        existingPro.count++;
      } else {
        alert("Please first select add to cart !");
      }
    },
    decreaseQuantity: (state, action) => {
      const existingPro = state.carts.find(
        (product) => product.id === action.payload
      );
      if (!existingPro) {
        alert("Please first select add to cart !");
      } else if (existingPro.count === 1) {
        state.carts = state.carts.filter(
          (product) => product.id !== action.payload
        );
        state.totolCart--;
      } else {
        existingPro.count--;
      }
    },
    removeCartProduct: (state, action) => {
      state.carts = state.carts.filter(
        (product) => product.id !== action.payload
      );
      state.totolCart--;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeCartProduct,
  allProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
