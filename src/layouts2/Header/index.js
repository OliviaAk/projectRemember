import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from 'react-redux'
import { Link , useHistory} from "react-router-dom";
import Button from "../../components/shared/Button";
import SignInModal from '../../components2/shared/SingInModal'
import {logout} from '../../store2/actions'
import { getUsers } from '../../store2/thunks';


export default function Header() {
  const [isOpen, setIsOpen]= useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.authentication);
  const signOut = ()=>{
    dispatch(logout())
  }
  useEffect(()=>{
    dispatch(getUsers())
},[])

  return (
    <>
    <div className={styles.header}>
      
      <div className={styles.container}>
        <div className={styles.logoContent}>К 80-летию обороны Могилева</div>
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
                        <div className={styles.userInfo} onClick={signOut}>Выйти</div>

          ) : (
            <div className={styles.userInfo}>{user.firstName} {user.lastName}</div>

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
