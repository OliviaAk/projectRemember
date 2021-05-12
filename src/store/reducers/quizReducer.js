import { createReducer } from '@reduxjs/toolkit';
import {
  createQuiz,getQuiz, createQuestion,getQuestions
} from '../thunks';

export const initialState = {
  quizes: [],
  currentQuiz: null,
  question: null,
  questions: [],

 
};
/* eslint no-param-reassign: ["error", { "props": false }] */

const quiz = createReducer(initialState, {
  [createQuiz.fulfilled]: (state, { payload }) => {
    state.currentQuiz = payload;
  },
  [createQuestion.fulfilled]: (state, { payload }) => {
    state.question = payload;
  },
  [getQuiz.fulfilled]: (state, { payload }) => {
    state.quizes = payload;
  },
  [getQuestions.fulfilled]: (state, { payload }) => {
    state.questions = payload;
  },
});

export default quiz;
