import axios from "axios";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "@/lib/getCookie";

type CartItem = { id: number; quantity: number };

type InitialState = { cart: CartItem[]; length: number; isLoading: boolean };

const initialState: InitialState = {
  cart: [],
  length: 0,
  isLoading: true,
};

export const cart = createAsyncThunk<any[], void>(
  "cart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getCookie<string>("cart", "");
      const buffer = Buffer.from(res, "base64");
      const json = buffer.toString("utf8");

      return JSON.parse(json);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      (async () => {
        const res = await axios.put("/api/cart", { new_cart: state.cart });
      })();
      state.length += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.length = action.payload.reduce(
        (length, item) => length + item.quantity,
        0
      );
      state.isLoading = false;
    });
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
