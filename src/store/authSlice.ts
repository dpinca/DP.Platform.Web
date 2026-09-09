import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: string | null;
  expiresAtUtc: string | null;
};

const initialState: AuthState = {
  accessToken: null,
  expiresAtUtc: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<AuthState>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.expiresAtUtc = action.payload.expiresAtUtc;
    },

    clearAuth: (state) => {
      state.accessToken = null;
      state.expiresAtUtc = null;
    },
  },
});

export const {
  setAuth,
  clearAuth,
} = authSlice.actions;

export default authSlice.reducer;