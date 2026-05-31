import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageData = (key) => {
  const data = localStorage.getItem(key);
  if (!data || data === "undefined") return [];
  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const initialState = {
  products: getLocalStorageData("currentProduct"),
  gifts: getLocalStorageData("currentGift"),
  offers: getLocalStorageData("currentOffer"),
  brands: getLocalStorageData("currentBrand"),
  selectedProduct: getLocalStorageData("selectedProduct") || null,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProduct: (currentState, action) => {
      const add = action.payload;
      const productWithCategory = {
        ...add,
        category: add.category || "product",
      };
      currentState.products.push(productWithCategory);
      localStorage.setItem(
        "currentProduct",
        JSON.stringify(currentState.products),
      );
    },
    addGift: (currentState, action) => {
      const add = action.payload;
      const productWithCategory = { ...add, category: add.category || "gift" };
      currentState.gifts.push(productWithCategory);
      localStorage.setItem("currentGift", JSON.stringify(currentState.gifts));
    },
    addOffer: (currentState, action) => {
      const add = action.payload;
      const productWithCategory = { ...add, category: add.category || "offer" };
      currentState.offers.push(productWithCategory);
      localStorage.setItem("currentOffer", JSON.stringify(currentState.offers));
    },
    addBrand: (currentState, action) => {
      const add = action.payload;
      const productWithCategory = { ...add, category: add.category || "brand" };
      currentState.brands.push(productWithCategory);
      localStorage.setItem("currentBrand", JSON.stringify(currentState.brands));
    },
    setSelectedProduct: (currentState, action) => {
      currentState.selectedProduct = action.payload;
      localStorage.setItem("selectedProduct", JSON.stringify(currentState.selectedProduct));
    },
    deleteProduct: (currentState, action) => {
      currentState.products = currentState.products.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem(
        "currentProduct",
        JSON.stringify(currentState.products),
      );
    },
    deleteOffer: (currentState, action) => {
      currentState.offers = currentState.offers.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("currentOffer", JSON.stringify(currentState.offers));
    },
    deleteGift: (currentState, action) => {
      currentState.gifts = currentState.gifts.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("currentGift", JSON.stringify(currentState.gifts));
    },
    deleteBrand: (currentState, action) => {
      currentState.brands = currentState.brands.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("currentBrand", JSON.stringify(currentState.brands));
    },
  },
});

export const {
  addProduct,
  addGift,
  addOffer,
  addBrand,
  setSelectedProduct,
  deleteProduct,
  deleteOffer,
  deleteGift,
  deleteBrand,
} = productSlice.actions;

export default productSlice.reducer;
