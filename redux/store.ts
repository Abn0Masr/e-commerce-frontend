import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import drawerSlice from "./slices/drawerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    drawer: drawerSlice,
  },
});

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];
