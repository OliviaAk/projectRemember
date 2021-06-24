import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, setPublishComment } from 'store/thunks';
import CommentView from './CommentView';
import styles from './styles.module.css';

export default function EditUsers() {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.liveTape);

  useEffect(() => {
    dispatch(getComments());
  }, []);
  const updateI = (id, isPublish) => {
    dispatch(setPublishComment({ id, isPublish }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContainer}>
        {comments.map((c) => (
          <CommentView
            image={c.image}
            isPublish={c.isPublish}
            comment={c.comment}
            link={c.link}
            commentCurrent={c}
            id={c._id}
            user={c.userId}
            markAsPublish={() => {
              updateI(c._id, !c.isPublish);
            }}
          />
        ))}
      </div>
    </div>
  );
}
