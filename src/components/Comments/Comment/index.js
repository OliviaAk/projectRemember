import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/thunks';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import styles from './styles.module.css';

export default function Comment({item}) {
  const [userCurrent, setUserCurrent]=useState();
  const { users } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers())
  },[])
  
  useEffect(()=>{
    if(users.length){
      users.map((u)=>{
        if(u._id === item.userId){
          setUserCurrent(u.name)
        }
      })
    }
  },[users])

  return (
    <div className={styles.commentItem}>
    <div className={styles.commentHeader}>
      <span>{userCurrent}</span>
      <span>{moment(item.date).format('hh:mm DD/MM/YYYY')}</span>
    </div>
    <div className={styles.container}>
      <span>{item.comment}</span>
    </div>
    <div className={styles.link}>
      {item.link && (
        <span>
          <span>Ссылки:</span>
          <a href={item.link}>{item.link}</a>
        </span>
      )}
    </div>
    {item.image && (
      <Image
        cloudName="belarus-remember"
        publicId={item.image}
        width="180"
        height="150"
        crop="scale"
      />
    )}
  </div>
  );
}
