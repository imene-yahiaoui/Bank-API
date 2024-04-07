/**
 * User Slice
 *
 * Redux slice for managing user state including login, logout, and user body data.
 *
 * @module userSlice
 */
import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  user: { email: string; password: string } | null;
  body: {
    email: string;
    lastname: string;
    firstname: string;
    lastName: string;
    userName: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  } | null;
};

const initialState: UserState = {
  user: null,
  body: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.body = null;
    },
    body: (state, action) => {
      state.body = action.payload;
    },
  },
});

export const { login, logout, body } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectBody = (state: { user: UserState }) => state.user.body;

export default userSlice.reducer;
