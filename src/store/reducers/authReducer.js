import { createReducer } from '@reduxjs/toolkit';
import { loginAdmin, getUser, getUsers, login } from '../thunks';
import { setOAuthToken, logout, logoutAdmin, setOAuthTokenGoogle } from '../actions';

export const initialState = {
  admin: null,
  isAdminSuccess: false,
  isLogoutAdmin: false,
  user: null,
  users: [],
  isAuthenticated: false,
  isLogout: false,
  error: null,
  isLoading: false,
  isRegistered: false,
  isInvalidCredentials: false,
  isInvalidUser: false,
  isUserCreating: false,
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
  [setOAuthTokenGoogle.type]: (state, { payload }) => {
    localStorage.setItem('token', payload);
    console.log('pay', payload);
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
    state.isAuthenticated = false;

  },
  [login.fulfilled]: (state, { payload }) => {
    state.isAuthenticated = true;
    state.isLoading = false;
    state.isLogout = false;
    state.isInvalidCredentials = false;
    state.user = payload;
  },
  [login.pending]: (state) => {
    state.isLoading = true;
    state.isInvalidCredentials = false;
  },
  [login.rejected]: (state) => {
    state.isLoading = false;
    state.isInvalidCredentials = true;
    state.isAuthenticated = false;
  },
});

export default authentication;
