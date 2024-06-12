import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Panel = "menu" | "cart";

type InitialState = {
  isOpen: boolean;
  panel: Panel | null;
};

const initialState: InitialState = {
  isOpen: false,
  panel: null,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state, action: PayloadAction<Panel>) => {
      state.isOpen = true;
      state.panel = action.payload;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
      state.panel = null;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
