import React, { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { Link , useHistory} from "react-router-dom";
import Button from "../../components/shared/Button";
import IconSVG from "../../components/shared/Icons";
import LogoType from '../../assets/images/logotype.jpg';


export default function Header({ user }) {
 
  return (
    <div className={styles.header}>
      
      <div className={styles.container}>
        <div className={styles.logoContent}>
TEXT PUBLISH CELEBRATION         </div>
        <div className={styles.userBlock}>
          <div className={styles.navItems}>
          <Link to='/' className={styles.mainLinks}>Главная</Link>
          <Link to='/dashboard' className={styles.mainLinks}>Доска памяти</Link>
          <Link to='/card' className={styles.mainLinks}>Создание героя</Link>
          <Link to='/hero' className={styles.mainLinks}>Акции города</Link>
          </div>
         <div className={styles.user}>
         <Button className={styles.readBtn} buttonColor='primary-btn1'>Авторизация</Button>
            </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    _id: PropTypes.string,
  }),
  handleLogout: PropTypes.func,
};
