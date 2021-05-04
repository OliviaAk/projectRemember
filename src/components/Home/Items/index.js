import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { IconSVG } from '../../shared';
import { Arrow } from '../../../assets/icons';
import { mainLinks } from '../../../mocks/mainLinks';

export default function Items() {
  const [hover, isHover] = useState(false);

  return (
    <div className={styles.splitItems}>
      {mainLinks.map((link) => (
        <div className={styles.splitItem}>
          <div className={styles.iconItem}>
            <IconSVG className={styles.itemImg} src={link.image} />
            <div className={styles.mask} />
            <Link className={styles.content} to={link.link}>
              <p>Открыть</p>
              <div className={styles.iconContainer}>
                <IconSVG className={styles.icon} src={Arrow} />
              </div>
            </Link>
          </div>
          <Link className={styles.splitItemContent} to={link.link}>
            <h3 className={styles.title}>{link.name}</h3>
            <p className={styles.text}>{link.text}</p>
          </Link>
          <div />
        </div>
      ))}
    </div>
  );
}
