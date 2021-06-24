import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import styles from './styles.module.css';
import { Button } from '../shared';
import { getHero, getPublishHeroes } from '../../store/thunks';

export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { publishedHeroes, hero } = useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(getPublishHeroes());
  }, []);

  const openInfoAboutHero = (heroId) => {
    dispatch(getHero(heroId));
    history.push('/hero');
  };
  const openMap = (item) => {
    window.open(item);
  };
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardContent}>
          {publishedHeroes.map((item, index) => (
            <div className={styles.dashboardItem} key={item._id}>
              <Image
                cloudName="belarus-remember"
                publicId={item.image}
                width="230"
                height="270"
                crop="scale"
              />

              <div className={styles.text}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    openMap(item.url);
                  }}
                  className={styles.textContainer}
                >
                  <p>{item.name}</p>
                  <p>{item.dateBirth}</p>
                </div>
                <Button
                  buttonColor="primary-btn3"
                  onClick={() => openInfoAboutHero(item._id)}
                >
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
