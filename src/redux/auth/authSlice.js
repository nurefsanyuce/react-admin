import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    //Başlangıç durumu
    user: {},
    options: {},
    permissions: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload;
    },
  },
});

export const { setUser, setOptions, setPermissions } = authSlice.actions;
export default authSlice;
