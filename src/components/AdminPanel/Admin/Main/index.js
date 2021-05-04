import React from 'react';
import { IconSVG } from '../../../shared';
import styles from './styles.module.css';
import diagram from '../../../../assets/images/d.png';

export default function Admin() {
  return (
    <div className={styles.admin}>
      <IconSVG className={styles.diagram} src={diagram} />
    </div>
  );
}
