import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Close } from 'assets/icons';
import styles from './styles.module.css';
import { IconSVG } from '..';

const Modal = ({ show, closeModal, text }) => (
  <div className={`${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
    <div className={styles.modalMain}>
      <div className={styles.modalHeader}>
        <p>Успешно!</p>
        <IconSVG handleClickIcon={closeModal} src={Close} />
      </div>
      <div className={styles.modalBody}>
        <span>{text}</span>
      </div>
    </div>
  </div>
);
export default Modal;
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
