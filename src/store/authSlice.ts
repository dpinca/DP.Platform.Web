import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: string | null;
  expiresAtUtc: string | null;
  isInitialized: boolean;
};

type SetAuthPayload = {
  accessToken: string;
  expiresAtUtc: string;
};

const initialState: AuthState = {
  accessToken: null,
  expiresAtUtc: null,
  isInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<SetAuthPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.expiresAtUtc = action.payload.expiresAtUtc;
      state.isInitialized = true;
    },

    clearAuth: (state) => {
      state.accessToken = null;
      state.expiresAtUtc = null;
    },
    setInitialized: (state) => {
      state.isInitialized = true;
    },
  },
});

export const { setAuth, clearAuth, setInitialized } = authSlice.actions;

export default authSlice.reducer;
