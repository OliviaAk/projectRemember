import React, { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import {useSelector} from 'react-redux'

import { Link , useHistory} from "react-router-dom";
import Button from "../../components/shared/Button";
import IconSVG from "../../components/shared/Icons";
import SignInModal from '../../components2/shared/SingInModal'
import LogoType from '../../assets/images/logotype.jpg';


export default function Header() {
  const [isOpen, setIsOpen]= useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const { user } = useSelector((state) => state.reducer);

  return (
    <>
    <div className={styles.header}>
      
      <div className={styles.container}>
        <div className={styles.logoContent}>TEXT TEXT Logo         </div>
        <div className={styles.userBlock}>
          <div className={styles.navItems}>
          <Link to='/' className={styles.mainLinks}>Главная</Link>
          <Link to='/dashboard' className={styles.mainLinks}>Доска памяти</Link>
          <Link to='/card' className={styles.mainLinks}>Создание героя</Link>
          <Link to='/hero' className={styles.mainLinks}>Акции города</Link>
          </div>
         <div className={styles.user} >
           {
             user ? <div
              onMouseOut={() => setIsLogout(false)}
             onMouseOver={() => setIsLogout(true)}>
               {isLogout ? (
                        <div className={styles.userInfo}>Выйти</div>

          ) : (
            <div className={styles.userInfo}>{user.name}</div>

          )}
             </div>:
             <Button className={styles.readBtn} onClick={()=>setIsOpen(true)}
             buttonColor='primary-btn1'>Авторизация</Button>
           }
        
        </div>
        </div>
      </div>
    </div>
    <SignInModal show={isOpen} closeModal={()=>setIsOpen(false)}/>
    </>
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
