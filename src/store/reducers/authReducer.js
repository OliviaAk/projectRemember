import { createReducer } from '@reduxjs/toolkit';
import { loginAdmin, getUser, getUsers } from '../thunks';
import { setOAuthToken, logout, logoutAdmin } from '../actions';

export const initialState = {
  admin: null,
  isAdminSuccess: false,
  isLogoutAdmin: false,
  user: null,
  users: [],
  isAuthenticated: false,
  isLogout: false,
};
const authentication = createReducer(initialState, {
  [loginAdmin.fulfilled]: (state, { payload }) => {
    state.admin = payload;
    state.isAdminSuccess = true;
  },
  [logoutAdmin.type]: (state, { payload }) => {
    state.admin = null;
    state.isAdminSuccess = false;
    state.isLogoutAdmin = true;
  },
  [setOAuthToken.type]: (state, { payload }) => {
    localStorage.setItem('token', payload);
    state.isAuthenticated = true;
  },
  [getUser.fulfilled]: (state, { payload }) => {
    state.user = payload;
  },
  [getUsers.fulfilled]: (state, { payload }) => {
    state.users = payload;
  },
  [logout.type]: (state, { payload }) => {
    localStorage.removeItem('token');
    state.user = null;
    state.isLogout = true;
  },
});

export default authentication;
