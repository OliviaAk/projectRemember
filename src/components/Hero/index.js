import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import Exa from 'assets/images/ee.jpg';
import Ex from 'assets/images/ex.jpg';
import Flag from 'assets/images/flag.png';
import Flag2 from 'assets/images/flag2.png';

import { Spinner } from '../shared';
import styles from './styles.module.css';

export default function Hero() {
  const { hero, isSelected } = useSelector((state) => state.dashboard);
  return (
    <div className={styles.hero}>
      {isSelected ? (
        <Spinner loading={isSelected} />
      ) : (
        <div className={styles.heroContainer}>
          <div className={styles.header}>
            <p>{hero.name}</p>
            <p>{hero.dateBirth}</p>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.decorationLeft}>
              <img src={Flag} alt="flag" height="120" />
            </span>
            <div className={styles.imageBlock}>
              <span className={styles.imgOne}>
                <img src={Exa} alt="" width="405" height="370" />
              </span>
              <span className={styles.imgTwo}>
                <Image
                  cloudName="belarus-remember"
                  publicId={hero.image}
                  width="380"
                  height="477"
                  crop="scale"
                />
              </span>
              <span className={styles.imgTree}>
                <img src={Ex} alt="" width="400" height="387" />
              </span>
            </div>
            <span className={styles.decorationRight}>
              <img src={Flag2} alt="flag" height="190" />
            </span>
          </div>
          <div className={styles.textBlock}>
            <div>Краткие сведения </div>
            <p>{hero.text} </p>
          </div>
        </div>
      )}
    </div>
  );
}
