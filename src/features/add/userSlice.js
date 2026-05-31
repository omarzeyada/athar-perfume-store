import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  currentUser: savedUser,
  isLoggedIn: savedUser ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const user = action.payload;
      state.isLoggedIn = true;
      state.currentUser = user
      localStorage.setItem("currentUser", JSON.stringify(user));
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
