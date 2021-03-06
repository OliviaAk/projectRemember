import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button, SingInModal, IconSVG } from 'components/shared';
import Belarus from 'assets/images/belarus.jpg';
import { useViewport } from 'context/';
import styles from './styles.module.css';
import { logout } from '../../store/actions';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const dispatch = useDispatch();
  const { isTablet } = useViewport();
  const { user } = useSelector((state) => state.authentication);

  const signOut = () => {
    dispatch(logout());
  };


  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          {!isTablet && (
            <div className={styles.logoContent}>
              <IconSVG src={Belarus} className={styles.logotype} />
              <span />
            </div>
          )}
          <div className={styles.userBlock}>
            <div className={styles.navItems}>
              <Link to="/" className={styles.mainLinks}>
                Главная
              </Link>
              <Link to="/dashboard" className={styles.mainLinks}>
                Доска памяти
              </Link>
              <Link to="/card" className={styles.mainLinks}>
                Создание героя
              </Link>
              <Link to="/game" className={styles.mainLinks}>
                Узнай больше
              </Link>
              <Link to="/comments" className={styles.mainLinks}>
                Я помню !
              </Link>
            </div>
            <div className={styles.user}>
              {user ? (
                <div onMouseMove={() => setIsLogout(!isLogout)}>
                  {isLogout ? (
                    <div className={styles.userInfo} onClick={signOut}>
                      Выйти
                    </div>
                  ) : (
                    <div className={styles.userInfo}>
                      {user.name} 
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  className={styles.readBtn}
                  onClick={() => setIsOpen(true)}
                  buttonColor="primary-btn1"
                >
                  Авторизация
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <SingInModal show={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
}
