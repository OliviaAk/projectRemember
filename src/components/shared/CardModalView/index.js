import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Close } from 'assets/icons';
import styles from './styles.module.css';

export const CardModalView = ({
  children,
  isOpened,
  setIsOpened,
  wrapperStyles,
  showCloseIcon,
}) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflowY = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.position = 'static';
      document.body.style.overflowY = 'auto';
    }
  }, [isOpened]);
  return (
    <div className={styles.container}>
      {isOpened && <div onClick={() => setIsOpened(false)} className={styles.shadow} />}
      <div
        className={`${styles.modalContainer} ${
          isOpened ? styles.openedModalContainer : null
        }`}
        style={wrapperStyles}
      >
        {showCloseIcon && (
          <div onClick={() => setIsOpened(false)}>
            <img src={Close} alt="close" className={styles.closeIcon} />
          </div>
        )}
      </div>
    </div>
  );
};

CardModalView.propTypes = {
  children: PropTypes.element.isRequired,
  isOpened: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
  wrapperStyles: PropTypes.object,
  showCloseIcon: PropTypes.bool,
};
CardModalView.defaultProps = {
  wrapperStyles: {},
  showCloseIcon: false,
};
