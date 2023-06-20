import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  isLoggedIn: boolean;
  username: string;
  password: string;
}

const initialState: IAppState = {
  isLoggedIn: false,
  username: "Shailesh",
  password: "password",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = appSlice.actions;
export default appSlice.reducer;
