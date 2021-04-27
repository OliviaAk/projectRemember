import { createReducer } from "@reduxjs/toolkit";
import {getCards, createCard} from '../thunks'

export const initialState = {
  cards: [],
  newCard: null,
 
};
const cardsTape = createReducer(initialState, {
  [getCards.fulfilled]: (state,{payload})=>{
    state.cards = payload;
  },
  [createCard.fulfilled]: (state,{payload})=>{
    state.newCard = payload;
  },
});

export default cardsTape;
