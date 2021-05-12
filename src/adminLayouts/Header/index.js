import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAdmin } from 'store/actions';
import { HideBar, Logout } from 'assets/icons';
import { IconSVG, Selector } from 'components/shared';
import styles from './styles.module.css';

const themes = [
  {label: 'Светлая', value: 1},
  {label: 'Темная', value: 2},

]
export default function Header() {
  const [theme, setThemes] = useState(themes[0].value);

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
          <Selector
            options={themes}
            value={themes.find((el) => el.value === theme)}
            onChange={({ value }) => {
              setThemes(value);
            }}
          />
        </div>
        <div className={styles.wrapperUser}>
          <div className={styles.userBlock}>
            <IconSVG src={Logout} className={styles.adminIcon} handleClickIcon={onHandleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};
