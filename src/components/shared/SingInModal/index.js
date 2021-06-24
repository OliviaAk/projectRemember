import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { IconSVG } from '..';
import { Close ,  HidePassword,ShowPassword,} from '../../../assets/icons';
import {login} from 'store/thunks';

const SignInModal = ({ show, closeModal }) => {
  const [isPasswordVisible, setVisible]= useState(false)
  const [userCredentials, setUserCredentials]= useState({name:'', email:'', password:''})
  const dispatch = useDispatch();

  const onHandleChange = (e)=>{
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });

  }
 
  const singIn = ()=>{
    dispatch(login(userCredentials))
    setUserCredentials({name:'', email:'', password:''})
    closeModal();
  }

  return (
    <div className={` ${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>
          <div />
          <IconSVG handleClickIcon={closeModal} src={Close} />
        </div>
        <div className={styles.modalBody}>
          <p>Пожалуйста, авторизуйтесь, чтобы создавать  открытки и добавлять комментарии.</p>
          <div className={styles.wrapperContainer}>
           <input value={userCredentials.name} name='name' placeholder='Введите имя и фамилию' onChange={onHandleChange} className={styles.input} />    
          
            <input value={userCredentials.email} name='email' placeholder='Введите почту' onChange={onHandleChange} className={styles.input}/>
            <div className={styles.inputPassword} >
            <input value={userCredentials.password} className={styles.password} name='password' placeholder='Пароль' onChange={onHandleChange} type={isPasswordVisible ? 'text': 'password'}/>
            <img src={isPasswordVisible ? ShowPassword: HidePassword} alt='password' onClick={()=>setVisible(!isPasswordVisible)} className={styles.iconPassword}/>
            </div>
          </div>
          <button onClick={singIn} className={styles.loginBtn}>Войти</button>
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
