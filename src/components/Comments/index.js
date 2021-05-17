import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CommentForm from './CommentForm';

export default function Comment() {
  const [isShowComments, showedComments] = useState(false);
  const [comment, setComment] = useState({});

  return (
    <div className={styles.comments}>
      <div className={styles.commentsContainer}>
        <CommentForm />
      </div>
    </div>
  );
}
