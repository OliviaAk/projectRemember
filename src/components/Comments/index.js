import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from 'store/thunks';
import styles from './styles.module.css';
import CommentBox from './CommentBox';
import TapeComment from './CommentTape';
import {PopUp} from 'components/shared';

export default function Comment() {
  const [publishComments, setPublishComments]=useState([])
  const [noUser, setNoUser] = useState(false);
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.liveTape);
  const { user , isAuthenticated} = useSelector((state) => state.authentication);

  useEffect(() => {
    if (!isAuthenticated && user === null) {
      setNoUser(true);
    }
    }, [])

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
      <PopUp
      show={noUser}
      isClose
      closeModal={() => setNoUser(false)}

    >
              <div className={styles.noUserPopUp}>Невозможно добавить запись, пожалуйста авторизуйтесь!</div>

      </PopUp>

    </div>
  );
}
