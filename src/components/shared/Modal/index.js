import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { IconSVG } from '..';
import { Close } from '../../../assets/icons';

const Modal = ({ show, closeModal }) => (
  <div className={`${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
    <div className={styles.modalMain}>
      <div className={styles.modalHeader}>
        <p>Благодарим за участие!</p>
        <button className={styles.modalButton} onClick={closeModal}>
          <IconSVG src={Close} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <p className={styles.modalText}>
          Ваша открытка создана успешно, после подтверждения, она появится на главной
          ленте!{' '}
        </p>
        <p>Спасибо!</p>
      </div>
    </div>
  </div>
);
export default Modal;
