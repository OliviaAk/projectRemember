import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import Admin from '../../../assets/images/admin.svg';
import { Button, Input, IconSVG } from '../../shared';
import { loginAdmin } from '../../../store/thunks';

export default function SingIn() {
  const methods = useForm({ mode: 'onChange' });
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAdminSuccess } = useSelector((state) => state.authentication);

  const {
    handleSubmit,
    formState: { isSubmitSuccessful, isValid },
  } = methods;

  useEffect(() => {
    if (isAdminSuccess) {
      history.push('/admin');
    }
  }, [isAdminSuccess, history]);

  const handleLoginClick = ({ login, password }) => {
    dispatch(loginAdmin({ login, password }));
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.login}>
        <div className={styles.loginContainer}>
          <div className={styles.loginHeader}>
            <h3>Вход</h3>
            <p>Добро пожаловать! Пожалуйста, введите логин и пароль. </p>
          </div>

          <form onSubmit={handleSubmit(handleLoginClick)} className={styles.loginForm}>
            <Input
              placeholder="Логин"
              type="text"
              name="login"
              maxLength={{
                value: 255,
              }}
              minLength={{
                value: 4,
              }}
            />
            <Input
              placeholder="Пароль"
              type="password"
              name="password"
              maxLength={{ value: 15, message: 'Password requires a valid password' }}
              minLength={{ value: 4, message: 'Password requires a valid password' }}
            />
            <Button className={styles.loginButton} buttonColor="primary-btn3">
              Войти
            </Button>
          </form>
        </div>
        <IconSVG className={styles.loginImage} src={Admin} />
      </div>
    </FormProvider>
  );
}
