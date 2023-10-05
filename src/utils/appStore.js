import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    // reducers...
    cart: cartReducer,
  },
});

export default appStore;
