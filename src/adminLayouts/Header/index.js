import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAdmin } from 'store/actions';
import { HideBar, AdminUser } from 'assets/icons';
import { IconSVG, Selector } from 'components/shared';
import styles from './styles.module.css';

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
        <div className={styles.wrapperMenu}>
          <IconSVG src={HideBar} className={styles.icon} />
          <span className={styles.wrapperText}>Панель администратора</span>
          <Selector className={styles.wrapperSelector} />
        </div>
        <div className={styles.wrapperUser}>
          <div className={styles.userBlock}>
            <IconSVG src={AdminUser} className={styles.adminIcon} />
            <span>User</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};
