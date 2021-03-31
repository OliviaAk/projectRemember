import React from 'react';
import PropTypes from 'prop-types';
import FooterNav from '../partials/FooterNav';
import FooterSocial from '../partials/FooterSocial';
import styles from './styles.module.css'

const Footer = ({}) => {

 

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerHeader}>
          <h3>Контакты</h3>
          <hr ></hr>
        </div>
        <div className={styles.footerItems}>
          <div className={styles.footerItem}>
          <h3>Мы в социальных сетях</h3>
            <p>
            Aliquam tempus ante placerat,
            consectetur tellus nec, porttitor nulla.
            </p>
            <div className={styles.social}>
            <a href="#"  className={styles.socialLink} > Facebook</a>
            <a href="#"  className={styles.socialLink} > Twitter</a>
            <a href="#"  className={styles.socialLink} > Google +</a>
            </div>

          </div>
          <div className={styles.footerItem}>
          <div class="contact-wrapper">
            <h3>Связаться с нами</h3>
            <h4><strong>Почта : </strong> info@yuordomain.com </h4>
            <h4><strong>Телефон : </strong> +09-88-99-77-55 </h4>
            <h4><strong>Почтовый индекс : </strong> 212001 </h4>
            </div>
          </div>
          <div className={styles.footerItem}>
          <div class="contact-wrapper">
            <h3>Адрес : </h3>
            <h4>Ул. Карла Маркса, 2 </h4>
            <h4>Могилев, Беларусь</h4>
            <div class="footer-div" >
            &copy; 2021 YourDomain |             </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const propTypes = {
    topOuterDivider: PropTypes.bool,
    topDivider: PropTypes.bool
  }
  
  const defaultProps = {
    topOuterDivider: false,
    topDivider: false
  }
  
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;