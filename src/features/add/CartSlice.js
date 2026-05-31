import { createSlice } from "@reduxjs/toolkit";
const savedCart = localStorage.getItem("cartState")
  ? JSON.parse(localStorage.getItem("cartState"))
  : [];

const initialState = {
  cartItems: savedCart,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    addToCart: (currentState, action) => {
      const add = action.payload;
      const existingItem = currentState.cartItems.find(
        (item) => item.id === add.id,
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        currentState.cartItems.push({ ...add, quantity: 1 });
      }
      localStorage.setItem("cartState", JSON.stringify(currentState.cartItems));
    },
    addGiftToCart: (currentState, action) => {
      const addGift = action.payload;

      const existingItem = currentState.cartItems.find(
        (item) => item.id === addGift.id,
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        currentState.cartItems.push({ ...addGift, quantity: 1 });
      }
      localStorage.setItem("cartState", JSON.stringify(currentState.cartItems));
    },
    addOfferToCart: (currentState, action) => {
      const addOffer = action.payload;

      const existingItem = currentState.cartItems.find(
        (item) => item.id === addOffer.id,
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        currentState.cartItems.push({ ...addOffer, quantity: 1 });
      }
      localStorage.setItem("cartState", JSON.stringify(currentState.cartItems));
    },
    addBrandToCart: (currentState, action) => {
      const addBrand = action.payload;

      const existingItem = currentState.cartItems.find(
        (item) => item.id === addBrand.id,
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        currentState.cartItems.push({ ...addBrand, quantity: 1 });
      }
      localStorage.setItem("cartState", JSON.stringify(currentState.cartItems));
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload,
      );
      if (item) {
        if (!item.quantity) item.quantity = 1;
        item.quantity += 1;
      }
      localStorage.setItem("cartState", JSON.stringify(state.cartItems));
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload,
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cartState", JSON.stringify(state.cartItems));
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload,
      );
      localStorage.setItem("cartState", JSON.stringify(state.cartItems));
    },
  },
  clearCart: (currentState) => {
    currentState.cartItems = [];
    localStorage.removeItem("cartState");
  },
});

export const {
  addToCart,
  addGiftToCart,
  addOfferToCart,
  incrementQuantity,
  decrementQuantity,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
