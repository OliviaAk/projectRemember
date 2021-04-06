import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import {useDispatch} from 'react-redux'
import PropTypes from "prop-types";
import IconSVG from "../../../components/shared/Icons";
import Close from '../../../assets/icons/close.svg'
import Google from '../../../assets/icons/google-plus-square-brands.svg'
import Facebook from '../../../assets/icons/facebook-square-brands.svg'
import Vk from '../../../assets/icons/vk-square.svg'
import Ok from '../../../assets/icons/odnoklassniki-square-brands.svg'
import {setUser} from '../../../store2/actions'

const SignInModal = ({ show, closeModal }) => {
   const dispatch = useDispatch();
  const signIn = ()=>{
    dispatch(setUser({name:'Olivia Ahmaeva'}))

  }

  return (
    <div className={` ${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>
            <div></div>
            <IconSVG handleClickIcon={closeModal} src={Close}/>
        </div>
        <div className={styles.modalBody}>
            <p>Пожалуйста, авторизуйтесь, чтобы создать ваши открытки и посты.</p>
            <div className={styles.socialContainer}>
            <IconSVG className={styles.socialIcon} src={Google} handleClickIcon={signIn}/>
            <IconSVG className={styles.socialIcon} src={Vk}  handleClickIcon={signIn}/>
            <IconSVG className={styles.socialIcon} src={Facebook}  handleClickIcon={signIn}/>
            <IconSVG className={styles.socialIcon} src={Ok}  handleClickIcon={signIn}/>
            </div>
           

        </div>

      </div>
    </div>
  );
};
export default SignInModal;
SignInModal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
  
};
SignInModal.defaultProps = {
  show: false,
};