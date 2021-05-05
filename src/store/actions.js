const { createAction } = require('@reduxjs/toolkit');

export const setUser = createAction('SET_USER');
export const setOAuthToken = createAction('SET_OAUTH_TOKEN_Facebook');
export const setOAuthTokenGoogle = createAction('SET_OAUTH_TOKEN_Google');

export const logout = createAction('LOGOUT');
export const logoutAdmin = createAction('LOGOUT_ADMIN');
