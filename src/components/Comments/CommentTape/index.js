import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
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
            <div className={styles.link}>{c.link && <span><a href={c.link} >{c.link}</a></span>}</div>
            {c.image &&
            <Image
                  cloudName="belarus-remember"
                  publicId={c.image}
                  width="180"
                  height="200"
                  crop="scale"
                />
            }
          </div>
        ))}
    </div>
  );
}

TapeComment.propTypes = {
  comments: PropTypes.array.isRequired,
};
