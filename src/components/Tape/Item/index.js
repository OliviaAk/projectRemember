import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import {Link} from 'react-router-dom';
import {
  FacebookShareButton,
  VKShareButton,
  InstapaperShareButton,
  OKShareButton,
  TelegramShareButton,
} from "react-share";
import { OkShared, FacebookShared,Vkontakte, Instagramm} from 'assets/icons'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, IconSVG } from '../../shared';
import styles from './styles.module.css';
import { getUsers } from 'store/thunks';

export default function Item({ item, image, name, user, setIsOpened }) {
  const [userEmail, setUserEmail] = useState('');
  const { users } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers())
  },[])

  useEffect(() => {
    if (users.length > 0) {
      users.map((i) => {
        if (i._id === user) {
          setUserEmail(i.name);
        }
      });
    }
  }, [user, users]);

  return (
    <>
    <div className={styles.wrapper} >
      <div className={styles.imageContainer} onClick={setIsOpened}>
      <Image
        key={item}
        cloudName="belarus-remember"
        publicId={image}
        width="200"
        height="200"
        crop="scale"
      />
      </div>
      <div className={styles.textContainer}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.infoBlock}>
        <span>{userEmail} помнит...</span>
      </div>
      <div className={styles.sharedBtns}>
      <FacebookShareButton title='Виртульная стена памяти героев обороны г.Могилева.'  url={window.location.href}>
            <IconSVG src={FacebookShared} className={styles.iconShared}/>
      </FacebookShareButton>

      <TelegramShareButton title='Виртульная стена памяти героев обороны г.Могилева.'  url={window.location.href}>
      <IconSVG src={Instagramm}  className={styles.iconShared}/>
            </TelegramShareButton>

      <VKShareButton title='Виртульная стена памяти героев обороны г.Могилева.'  url={window.location.href}>
      <IconSVG src={Vkontakte}  className={styles.iconShared}/>      </VKShareButton>

      <OKShareButton title='Виртульная стена памяти героев обороны г.Могилева.' url={window.location.href}>
      <IconSVG src={OkShared}  className={styles.iconShared}/>      </OKShareButton>

      </div>
      </div>
    </div>
    </>
  );
}
Item.propTypes = {
  item: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  setIsOpened: PropTypes.func.isRequired,
};
