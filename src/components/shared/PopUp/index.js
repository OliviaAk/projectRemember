import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import IconSVG from '../Icons';
import Close from '../../../assets/icons/close.svg';

const PopUp = ({ show, closeModal, children, wrapperStyles, isClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.position = 'static';
      document.body.style.overflowY = 'auto';
    }
  }, [show]);
  return (
    <div className={` ${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
      <div className={styles.modalMain} style={wrapperStyles}>
        <div className={styles.modalHeader}>
          <div />
          {isClose && <IconSVG handleClickIcon={closeModal} src={Close} />}
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};
export default PopUp;
PopUp.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  wrapperStyles: PropTypes.object,
  isClose: PropTypes.bool,
};
PopUp.defaultProps = {
  wrapperStyles: {},
  isClose: false,
};
