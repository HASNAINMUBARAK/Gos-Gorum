import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./features/Slicer";
export const store = configureStore({
  reducer: {
    "cartData": cartSlicer
  }
});
