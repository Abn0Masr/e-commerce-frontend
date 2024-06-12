import axios, { AxiosError } from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "@/lib/getCookie";

export type User = {
  id: string;
  email: string;
  role: "customer" | "saller" | "supporter" | "administrator";
  verified: boolean;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  profile: Profile;
};

export type Profile = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  birthDate?: Date;
  bio?: string;
  avatar?: string;
  cover?: string;
  createdAt: Date;
  updatedAt: Date;
};

const initialState = {
  user: null as User | null,
  isLoading: true,
  error: null as string | null,
};

const handlePending = (state: typeof initialState) => {
  state.isLoading = true;
  state.error = null;
  state.user = null;
};

const handleFulfilled = (
  state: typeof initialState,
  action: PayloadAction<User>
) => {
  state.isLoading = false;
  state.user = action.payload;
};

const handleRejected = (state: typeof initialState, action: any) => {
  state.isLoading = false;
  state.error = action.error.message as string;
};

export const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (_, { rejectWithValue }) => {
    try {
      const subscribe = await getCookie<string>("reg_state", "unregistered");

      if (subscribe === "unregistered") return null;

      const res = await axios.get(process.env.ME_URL || "", {
        withCredentials: true,
      });

      return res.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      if (!axiosError.response) {
        return rejectWithValue("Network error");
      }
      return rejectWithValue(axiosError.response?.data as string);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (
    data: { email: string; password: string; remember_me: boolean },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(process.env.LOGIN_URL as string, data, {
        withCredentials: true,
      });
      return res.data.user;
    } catch (err) {
      const axiosError = err as AxiosError;
      return rejectWithValue(axiosError.response?.data as string);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(currentUser.pending, handlePending)
      .addCase(currentUser.fulfilled, handleFulfilled)
      .addCase(currentUser.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(login.rejected, handleRejected);
  },
});

export default authSlice.reducer;
