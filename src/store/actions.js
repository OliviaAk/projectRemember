const { createAction } = require('@reduxjs/toolkit');

export const setHero = createAction('SET_HERO');
export const setUser = createAction('SET_USER');
export const setOAuthToken = createAction('SET_OAUTH_TOKEN');
export const logout = createAction('LOGOUT');
export const logoutAdmin = createAction('LOGOUT_ADMIN');
