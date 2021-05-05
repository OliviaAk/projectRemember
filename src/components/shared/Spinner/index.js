import React from 'react';
import { IconSVG } from '..';
import Loader from '../../../assets/images/loading.gif';
import styles from './styles.module.css';

export default function Spinner(loading) {
  return (
    <div className={loading ? styles.spinner : styles.spinnerHide}>
      <IconSVG src={Loader} />
    </div>
  );
}
