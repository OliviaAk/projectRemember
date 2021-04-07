import { createReducer } from "@reduxjs/toolkit";
import {setHero,setUser} from '../actions'

export const initialState = {
  hero: null,
  user: null,
 
};
const dashboard = createReducer(initialState, {
  [setHero.type]: (state,{payload})=>{
    state.hero = payload;
  },
  [setUser.type]: (state,{payload})=>{
    state.user = payload;
  },
});

export default dashboard;
