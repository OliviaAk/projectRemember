import { createReducer } from '@reduxjs/toolkit';
import { createComment, getComments } from '../thunks';

export const initialState = {
  comments: [],
  newComment: null,
};
/* eslint no-param-reassign: ["error", { "props": false }] */

const liveTape = createReducer(initialState, {
  [createComment.fulfilled]: (state, { payload }) => {
    state.newComment = payload;
    state.comments = [...state.comments, { ...payload }];
  },
  [getComments.fulfilled]: (state, { payload }) => {
    state.comments = payload;
  },
});

export default liveTape;
