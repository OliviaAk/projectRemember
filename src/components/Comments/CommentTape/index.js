import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import { Image } from 'cloudinary-react';
import styles from './styles.module.css';

export default function TapeComment({ comments }) {
 

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Лента новостей города Могилева</div>
      {comments.length > 0 &&
        comments.map((c) => (
          <>
          <Comment item={c}/>
            
          </>
        ))}
    </div>
  );
}

TapeComment.propTypes = {
  comments: PropTypes.array.isRequired,
};
