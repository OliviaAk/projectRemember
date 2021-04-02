import { createReducer } from "@reduxjs/toolkit";
import {setHero} from './actions'

export const initialState = {
  heroes: [],
  hero: null,
  currentSearch : null,
  histories : [],
  history: null,
  loading: false,
  newHero:null,
  error: null,
  usersHeroes:[],
  userCard:null,
 
};
const reducer = createReducer(initialState, {
  [setHero.type]: (state,{payload})=>{
    state.hero = payload;
  },
});

export default reducer;
