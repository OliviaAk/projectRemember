import { createReducer } from '@reduxjs/toolkit';
import {
  getCards,
  createCard,
  getPublishCards,
  setPublishCard,
  editCard,
  getCard,
  deleteCard,
} from '../thunks';

export const initialState = {
  cards: [],
  publishCards: [],
  newCard: null,
  clickedCard: null,
};
/* eslint no-param-reassign: ["error", { "props": false }] */

const cardsTape = createReducer(initialState, {
  [getCards.fulfilled]: (state, { payload }) => {
    state.cards = payload;
  },
  [getCard.fulfilled]: (state, { payload }) => {
    state.clickedCard = payload;
  },
  [getPublishCards.fulfilled]: (state, { payload }) => {
    state.publishCards = payload;
  },
  [createCard.fulfilled]: (state, { payload }) => {
    state.newCard = payload;
  },
  [setPublishCard.fulfilled]: (state, { payload }) => {
    const index = state.cards.findIndex((e) => e._id === payload._id);
    state.cards[index] = payload;
  },
  [editCard.fulfilled]: (state, { payload }) => {
    const index = state.cards.findIndex((e) => e._id === payload.data._id);
    state.cards[index] = payload.data;
  },
  [deleteCard.fulfilled]: (state, { payload }) => {
    state.cards = state.cards.filter((item) => item._id !== payload.data);
  },
});

export default cardsTape;
