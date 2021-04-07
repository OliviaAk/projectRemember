import { createReducer } from "@reduxjs/toolkit";
import {loginAdmin} from '../thunks'
export const initialState = {
  admin: null,
  isAdminSuccess: false,
  user: null,
 
};
const authentication = createReducer(initialState, {
    [loginAdmin.fulfilled]: (state, { payload }) => {
        state.admin = payload;
        state.isAdminSuccess = true;
      },
});

export default authentication;
