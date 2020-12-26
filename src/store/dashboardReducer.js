import { createReducer } from "@reduxjs/toolkit";
import { getHeroes } from "./thunks";
import {setHero} from './actions'

export const initialState = {
  heroes: [],
  loading: false,
  error: null,
};
const dashboardHero = createReducer(initialState, {
  [getHeroes.fulfilled]: (state, { payload }) => {
    state.heroes = payload;
  },
  [setHero.type]: (state)=>{
    state.loading = true;
  }
});

export default dashboardHero;
