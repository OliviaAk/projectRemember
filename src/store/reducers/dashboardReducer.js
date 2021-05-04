import { createReducer } from '@reduxjs/toolkit';
import { setHero, setUser } from '../actions';
import { getHeroes, createHero } from '../thunks';

export const initialState = {
  hero: null,
  heroes: [],
  user: null,
};
const dashboard = createReducer(initialState, {
  [setHero.type]: (state, { payload }) => {
    state.hero = payload;
  },
  [setUser.type]: (state, { payload }) => {
    state.user = payload;
  },
  [getHeroes.fulfilled]: (state, { payload }) => {
    state.heroes = payload;
  },
  [createHero.fulfilled]: (state, { payload }) => {
    state.hero = payload;
  },
});

export default dashboard;
