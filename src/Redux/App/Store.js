import { configureStore } from "@reduxjs/toolkit";
import Features from "../Features/Features";
import CardReducer from "../Features/CartSlice";

export const store = configureStore({
  reducer: {
    Features: Features,
    CartState: CardReducer,
  },
});
