import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { IconSVG } from '../../components/shared';
import styles from './styles.module.css';
import { Admin } from '../../assets/icons';

const Footer = ({}) => {
  const history = useHistory();

  const openAdmin = () => {
    history.push('/singIn');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerHeader}>
          <h3>Контакты</h3>
          <hr />
        </div>
        <div className={styles.footerItems}>
          <div className={styles.footerItem}>
            <h3>Мы в социальных сетях</h3>
            <p>Подпишись и узнавай больше новостей о городе Могилеве от нас!</p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>
                {' '}
                Facebook
              </a>
              <a href="#" className={styles.socialLink}>
                {' '}
                Twitter
              </a>
              <a href="#" className={styles.socialLink}>
                {' '}
                Google +
              </a>
            </div>
            <IconSVG
              src={Admin}
              handleClickIcon={openAdmin}
              className={styles.adminIcon}
            />
          </div>
          <div className={styles.footerItem}>
            <div className="contact-wrapper">
              <h3>Связаться с нами</h3>
              <h4>
                <strong>Почта : </strong> info@yuordomain.com{' '}
              </h4>
              <h4>
                <strong>Телефон : </strong> 74-00-32{' '}
              </h4>
              <h4>
                <strong>Почтовый индекс : </strong> 212030{' '}
              </h4>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className="contact-wrapper">
              <h3>Адрес : </h3>
              <h4>ул. Первомайская, 30 </h4>
              <h4>Могилев, Беларусь</h4>
              <div className="footer-div">
                &copy; 2021 Официальный сайт УК «Централизованная система государственных
                публичных библиотек г. Могилёва».{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
