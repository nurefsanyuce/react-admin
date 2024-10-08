import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import authSlice from "./auth/authSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
