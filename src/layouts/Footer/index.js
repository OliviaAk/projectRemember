import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.context}>
        <div className={styles.contextItems}>
          <img src={Logo} alt="" className={styles.contextLogo} />
        </div>
        <div className={styles.contextItems}>
          <Link to="/" className={styles.footerLink}>
            О проекте
          </Link>
          <Link to="/" className={styles.footerLink}>
            Обратная связь
          </Link>
          <Link to="/" className={styles.footerLink}>
            Вопроcы-Ответы
          </Link>
          <Link to="/" className={styles.footerLink}>
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
}
