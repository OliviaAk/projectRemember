import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { IconSVG } from '..';
import { Close, Google, Vk, Facebook, Ok } from '../../../assets/icons';
import { setUser } from '../../../store/actions';

const SignInModal = ({ show, closeModal }) => {
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(setUser({ name: 'Оливия Ахмаева' }));
  };
  const handleLoginWithFacebookClick = () => {
    window.open(`${process.env.REACT_APP_API_URI}/auth/facebook`, '_self');
  };
  const handleLoginWithGoogleClick = () => {
    window.open(`${process.env.REACT_APP_API_URI}/auth/google`, '_self');
  };

  return (
    <div className={` ${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>
          <div />
          <IconSVG handleClickIcon={closeModal} src={Close} />
        </div>
        <div className={styles.modalBody}>
          <p>Пожалуйста, авторизуйтесь, чтобы создать ваши открытки и посты.</p>
          <div className={styles.socialContainer}>
            <IconSVG
              className={styles.socialIcon}
              src={Google}
              handleClickIcon={handleLoginWithGoogleClick}
            />
            <IconSVG className={styles.socialIcon} src={Vk} handleClickIcon={signIn} />
            <IconSVG
              className={styles.socialIcon}
              src={Facebook}
              handleClickIcon={handleLoginWithFacebookClick}
            />
            <IconSVG className={styles.socialIcon} src={Ok} handleClickIcon={signIn} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInModal;
SignInModal.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};
SignInModal.defaultProps = {
  show: false,
};
