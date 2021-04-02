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
        <div>
          <span>К 80 летию обороны Могилева посвящается</span>
        </div>
        <div className={styles.userBlock}>
          <div className={styles.navItems}>
          <Link to='/' className={styles.mainLinks}>Главная</Link>
          <Link to='/' className={styles.mainLinks}>Доска памяти</Link>
          <Link to='/' className={styles.mainLinks}>Создание героя</Link>
          <Link to='/' className={styles.mainLinks}>Аллея героев</Link>
          </div>
         <div className={styles.user}>
         <Button className={styles.readBtn} buttonColor='btn-custom'>Авторизоваться</Button>
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
