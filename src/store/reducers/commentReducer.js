import { createReducer } from '@reduxjs/toolkit';
import { createComment, getComments, removeComment } from '../thunks';

export const initialState = {
  comments: [],
  newComment: null,
};
/* eslint no-param-reassign: ["error", { "props": false }] */

const liveTape = createReducer(initialState, {
  [createComment.fulfilled]: (state, { payload }) => {
    state.newComment = payload;
    state.comments = [{ ...payload }, ...state.comments];
  },
  [getComments.fulfilled]: (state, { payload }) => {
    state.comments = payload;
  },
  [removeComment.fulfilled]: (state, { payload }) => {
    state.comments = state.comments.filter((item) => item._id !== payload.data);
  },
});

export default liveTape;
