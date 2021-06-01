import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CommentForm from './CommentForm';
import CommentBox from './CommentBox';

export default function Comment() {
  const [isShowComments, showedComments] = useState(false);
  const [comment, setComment] = useState({});

  return (
    <div className={styles.comments}>
      <div className={styles.commentsContainer}>
        <CommentBox />
      </div>
    </div>
  );
}
