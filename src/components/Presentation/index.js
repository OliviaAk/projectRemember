import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import { Close } from 'assets/icons';
import Promo from 'assets/images/cardImg.png'
import styles from './styles.module.css';

export function  Presentation () {
  const history = useHistory();
  const { clickedCard } = useSelector((state) => state.cardsTape);
  const closeCard = ()=>{
    history.push('/')
  }

  return (
    <div className={styles.shadow}>
      <div className={styles.modalContainer}>
          <div onClick={closeCard}>
            <img src={Close} alt="close" className={styles.closeIcon} />
          </div>
          <div className={styles.modalContent}>
            {
              clickedCard !==null && 
            <div className={styles.card}>
              <div className={styles.left}>
                <Image
                  cloudName="belarus-remember"
                  publicId={clickedCard.image}
                  width="300"
                  height="350"
                  crop="scale"
                />
                <div className={styles.header}>
                  <span>{clickedCard.name}</span>
                  <span>{clickedCard.dateBirth}</span>
                </div>
                </div>
                <div className={styles.right}>
                  <span>{clickedCard.description}</span>
                  <img alt='promo' src={Promo} width='320'/>
                  </div>
              </div>
            }
          </div>
      </div>
    </div>
  );
};


