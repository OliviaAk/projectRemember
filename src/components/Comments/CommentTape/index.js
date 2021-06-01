import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function TapeComment({ comments }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Комментарии</div>
      {comments.length > 0 &&
        comments.map((c) => (
          <div className={styles.commentItem}>
            <div className={styles.commentHeader}>
              <span>Пользователь: Olivia</span>
              <span>{moment(c.date).format('hh:mm DD/MM/YYYY')}</span>
            </div>
            <div className={styles.container}>
              <span>{c.comment}</span>
            </div>
          </div>
        ))}
    </div>
  );
}

TapeComment.propTypes = {
  comments: PropTypes.array.isRequired,
};
