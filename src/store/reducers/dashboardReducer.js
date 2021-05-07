import { createReducer } from '@reduxjs/toolkit';
import {
  getHeroes,
  createHero,
  getHero,
  editHero,
  deleteHero,
  setPublishHero,
  getPublishHeroes,
} from '../thunks';

export const initialState = {
  hero: null,
  heroes: [],
  publishedHeroes: [],
  user: null,
  isSelected: false,
  loadingHero: false,
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
  [getPublishHeroes.fulfilled]: (state, { payload }) => {
    state.publishedHeroes = payload;
  },
  [createHero.fulfilled]: (state, { payload }) => {
    state.hero = payload;
    state.loadingHero = false;
  },
  [createHero.pending]: (state, { payload }) => {
    state.loadingHero = true;
  },
  [editHero.fulfilled]: (state, { payload }) => {
    const index = state.heroes.findIndex((e) => e._id === payload.data._id);

    state.heroes[index] = payload.data;
  },
  [deleteHero.fulfilled]: (state, { payload }) => {
    state.heroes = state.heroes.filter((item) => item._id !== payload.data);
  },
  [setPublishHero.fulfilled]: (state, { payload }) => {
    const index = state.heroes.findIndex((e) => e._id === payload._id);
    state.heroes[index] = payload;
  },
});

export default dashboard;
