import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import  Button  from "../Button";
import  IconSVG  from '../Icons'
import Close from '../../../assets/icons/close.svg'
import User from '../../../assets/icons/user-regular.svg'
import HidePassword from '../../../assets/icons/eye-solid.svg'
import ShowPassword from '../../../assets/icons/eye-slash-solid.svg'
import Password from '../../../assets/icons/lock-solid.svg'
const Modal = ({show, closeModal}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitSuccessful },
  } = useForm();

  return (
    <div className={show ? styles.modalActive : styles.modalHide}>
      <div className={styles.modalMain}>
        

        <div className={styles.modalContent}>
        <form className={styles.loginForm}>
          <div className={styles.formItem}>
            <div className={styles.loginFormInput}>
              <IconSVG className={styles.loginIcon} src={User} />
              <input
                className={styles.formInput}
                placeholder="Логин"
                type="text"
                name="email"
                ref={register({ required: true, maxLength: 20 })}
              />
            </div>
            {errors.email && errors.email.type === "required" && (
              <span className={styles.inputErrors}>This field is required</span>
            )}
          </div>
          <div className={styles.formItem}>
            <div className={styles.loginFormInput}>
              <IconSVG className={styles.loginIcon} src={Password} />
              <input
                className={styles.formInput}
                placeholder="Пароль"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                ref={register({ required: true, maxLength: 8 })}
              />
              <IconSVG
                className={styles.loginIcon}
                src={isPasswordVisible?HidePassword: ShowPassword}
                handleClickIcon={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            </div>
            {errors.password && errors.password.type === "required" && (
              <span className={styles.inputErrors}>This field is required</span>
            )}
          </div>
          
          <div className={styles.formItem}>
            <Button buttonColor='primary-btn2'>
              Войти
            </Button>
          </div>
         
        </form>
         
        </div>
      </div>
    </div>
  );
};
export default Modal;
