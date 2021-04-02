import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";

/*
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});*/
export default configureStore({
  reducer: combineReducers({
    reducer: reducer,
 
  }),
  //middleware: customizedMiddleware,
});
