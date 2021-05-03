import { createReducer } from "@reduxjs/toolkit";
import {getCards, createCard,getPublishCards,setPublishCard} from '../thunks'

export const initialState = {
  cards: [],
  publishCards: [],
  newCard: null,
 
};
const cardsTape = createReducer(initialState, {
  [getCards.fulfilled]: (state,{payload})=>{
    state.cards = payload;
  },
  [getPublishCards.fulfilled]: (state,{payload})=>{
    state.publishCards = payload;
  },
  [createCard.fulfilled]: (state,{payload})=>{
    state.newCard = payload;
  },
  [setPublishCard.fulfilled]: (state, { payload }) => {
    const index = state.cards.findIndex((e) => e._id === payload._id);
    state.cards[index] = payload;
  },
});

export default cardsTape;
