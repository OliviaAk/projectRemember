import React from 'react';
import Loader from 'assets/images/loading.gif';
import { IconSVG } from '..';
import styles from './styles.module.css';

export default function Spinner(loading) {
  return (
    <div className={loading ? styles.spinner : styles.spinnerHide}>
      <div className={styles.wrapper}>
        <IconSVG src={Loader} />
      </div>
    </div>
  );
}
