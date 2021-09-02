import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { setToken, setUser, signOut } = authSlice.actions;
