import { createReducer } from '@reduxjs/toolkit';
import {
  createQuiz,
  getQuiz,
  createQuestion,
  getQuestions,
  deleteQuiz,
  editQuiz,
  deleteQuestion,
  editQuestion,
  getCurrentQuestions,
} from '../thunks';
import { setSelectedQuiz } from '../actions';

export const initialState = {
  quizes: [],
  currentQuiz: null,
  currentQuestions: [],
  question: null,
  questions: [],
  selectedQuiz: null,
};
/* eslint no-param-reassign: ["error", { "props": false }] */

const quiz = createReducer(initialState, {
  [createQuiz.fulfilled]: (state, { payload }) => {
    state.currentQuiz = payload;
  },
  [createQuestion.fulfilled]: (state, { payload }) => {
    state.question = payload;
    state.questions = [...state.questions, { ...payload }];
  },
  [getCurrentQuestions.fulfilled]: (state, { payload }) => {
    state.currentQuestions = payload;
  },
  [getQuiz.fulfilled]: (state, { payload }) => {
    state.quizes = payload;
  },
  [setSelectedQuiz.type]: (state, { payload }) => {
    state.selectedQuiz = payload;
  },
  [getQuestions.fulfilled]: (state, { payload }) => {
    state.questions = payload;
  },
  [editQuiz.fulfilled]: (state, { payload }) => {
    const index = state.quizes.findIndex((e) => e._id === payload.data._id);

    state.quizes[index] = payload.data;
  },
  [editQuestion.fulfilled]: (state, { payload }) => {
    const index = state.questions.findIndex((e) => e._id === payload.data._id);

    state.questions[index] = payload.data;
  },
  [deleteQuiz.fulfilled]: (state, { payload }) => {
    state.quizes = state.quizes.filter((item) => item._id !== payload.data);
  },
  [deleteQuestion.fulfilled]: (state, { payload }) => {
    state.questions = state.questions.filter((item) => item._id !== payload.data);
  },
});

export default quiz;
