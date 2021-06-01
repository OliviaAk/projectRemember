import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function TapeComment({ comments }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Комментарииs</div>
      {comments.length > 0 &&
        comments.map((c) => {
          <div className={styles.commentItem}>kkkk</div>;
        })}
      <p>LOL</p>
    </div>
  );
}

TapeComment.propTypes = {
  comments: PropTypes.array.isRequired,
};
