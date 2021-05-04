import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import { logoutAdmin } from '../../store/actions';

export default function Header() {
  const [isLogout, setIsLogout] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const onHandleLogout = () => {
    dispatch(logoutAdmin());
    history.push('/singIn');
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.userBlock} onMouseMove={() => setIsLogout(!isLogout)}>
          {isLogout ? (
            <div onClick={onHandleLogout} className={styles.userLogout}>
              <span>Выход</span>
            </div>
          ) : (
            <div className={styles.user}>
              <span>Панель редактирования</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};
