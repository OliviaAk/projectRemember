import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from 'store/thunks';
import styles from './styles.module.css';
import CommentBox from './CommentBox';
import TapeComment from './CommentTape';

export default function Comment() {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.liveTape);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    <div className={styles.comments}>
      <div className={styles.commentsContainer}>
        <CommentBox />
        <TapeComment comments={comments} />
      </div>
    </div>
  );
}
