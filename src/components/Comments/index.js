import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from 'store/thunks';
import styles from './styles.module.css';
import CommentBox from './CommentBox';
import TapeComment from './CommentTape';

export default function Comment() {
  const [publishComments, setPublishComments]=useState([])
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.liveTape);

  useEffect(() => {
    dispatch(getComments());
  }, []);
  useEffect(()=>{
    if(comments.length >0){
      const newCom = comments.filter((c)=>c.isPublish === true)
      setPublishComments(newCom)
    }
  },[comments])

  return (
    <div className={styles.comments}>
      <div className={styles.commentsContainer}>
        <CommentBox />
        <TapeComment comments={publishComments} />
      </div>
    </div>
  );
}
