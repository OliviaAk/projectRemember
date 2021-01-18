import { createReducer } from "@reduxjs/toolkit";
import { getHeroes, getHero,getHeroByName, getHistory, getHistoryByDate  } from "./thunks";
import {setDay, setHero} from './actions'

export const initialState = {
  heroes: [],
  current: null,
  currentSearch : null,
  histories : [],
  history: null,
  loading: false,
  error: null,
};
const dashboardHero = createReducer(initialState, {
  [getHeroes.fulfilled]: (state, { payload }) => {
    state.heroes = payload;
  },
  [setHero.type]: (state,{payload})=>{
    state.current = payload;
  },
  [getHeroByName.fulfilled]: (state,{payload})=>{
    state.currentSearch = payload;
  },
  [setDay.type]: (state, { payload }) => {
    state.history = payload;
  },
});

export default dashboardHero;
