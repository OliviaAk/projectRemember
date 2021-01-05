import { createReducer } from "@reduxjs/toolkit";
import { getHeroes, getHero,getHeroByName, getHistory, getHistoryByDate  } from "./thunks";

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
  [getHero.fulfilled]: (state,{payload})=>{
    state.current = payload;
  },
  [getHeroByName.fulfilled]: (state,{payload})=>{
    state.currentSearch = payload;
  },
  [getHistory.fulfilled]: (state, { payload }) => {
    state.histories = payload;
  },
  [getHistoryByDate.fulfilled]: (state, { payload }) => {
    state.history = payload;
  },
});

export default dashboardHero;
