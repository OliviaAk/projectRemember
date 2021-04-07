import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import dashboard from "./reducers/dashboardReducer";
import authentication from "./reducers/authReducer";


export default configureStore({
  reducer: combineReducers({
    dashboard,
    authentication,
 }),
});
