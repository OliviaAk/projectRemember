import React from 'react';
import styles from './styles.module.css';
import { IconSVG } from '../../shared';
import Start from '../../../assets/images/photo.png';
import Update from '../../../assets/images/update.png';
import End from '../../../assets/images/star.png';

export default function Home() {
  return (
      <div className={styles.homeContainer}>
        <div className={styles.homeInfo}>
            <div className={styles.createItem}>
              <div className={styles.createIcon}>
                <IconSVG className={styles.icon} src={Start} />
              </div>
              <div className={styles.createText}>Загрузите фото и добавьте текст</div>
            </div>
            <div className={styles.dash}/>
            <div className={styles.createItem}>
              <div className={styles.createIcon}>
                <IconSVG className={styles.icon} src={Update} />
              </div>
              <div className={styles.createText}>
                Сгенерируйте открытку с вашим героем
              </div>
            </div>
            <div className={styles.dash}/>

            <div className={styles.createItem}>
              <div className={styles.createIcon}>
                <IconSVG className={styles.icon} src={End} />
              </div>
              <div className={styles.createText}>
                Сохраните открытку и поделитесь им в социальных сетях
              </div>
            </div>
          </div>
        </div>
  );
}
