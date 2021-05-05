import { createReducer } from '@reduxjs/toolkit';
import { getHeroes, createHero, getHero } from '../thunks';

export const initialState = {
  hero: null,
  heroes: [],
  user: null,
  isSelected: false,
};
/* eslint no-param-reassign: ["error", { "props": false }] */

const dashboard = createReducer(initialState, {
  [getHero.fulfilled]: (state, { payload }) => {
    state.hero = payload;
    state.isSelected = false;
  },
  [getHero.pending]: (state) => {
    state.isSelected = true;
  },
  [getHeroes.fulfilled]: (state, { payload }) => {
    state.heroes = payload;
  },
  [createHero.fulfilled]: (state, { payload }) => {
    state.hero = payload;
  },
});

export default dashboard;
