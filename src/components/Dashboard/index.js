import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import styles from './styles.module.css';
import { setHero } from '../../store/actions';
import { Button } from '../shared';
import { getHeroes } from '../../store/thunks';

export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { heroes } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getHeroes());
  }, []);
  const openInfoAboutHero = (id) => {
    history.push('/hero');
    dispatch(setHero(id));
  };
  const openMap = (item) => {
    window.open(item);
  };
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardContent}>
          {heroes.map((item, index) => (
            <div className={styles.dashboardItem}>
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
                  onClick={() => openInfoAboutHero(item)}
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
