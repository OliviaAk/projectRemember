import { createReducer } from '@reduxjs/toolkit';
import { createComment, getComments, removeComment, setPublishComment, editComment } from '../thunks';

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
    state.comments = state.comments.filter((item) => item._id !== payload);
  },
  [setPublishComment.fulfilled]: (state, { payload }) => {
    const index = state.comments.findIndex((e) => e._id === payload._id);
    state.comments[index] = payload;
  },
  [editComment.fulfilled]: (state, { payload }) => {
    const index = state.comments.findIndex((e) => e._id === payload.data._id);

    state.comments[index] = payload.data;
  },
});

export default liveTape;
