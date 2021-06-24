import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { IconSVG } from '../../components/shared';
import styles from './styles.module.css';
import { Admin , LibFac, 
  LibInst,
   LibOk, 
   LibTw,
    LibYou, LibVk, } from '../../assets/icons';

const Footer = () => {
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
            <p className={styles.text}>
              Подпишись и узнавай больше новостей о городе Могилеве от нас!
            </p>
            <div className={styles.wrapper}>
            <div className={styles.social}>
              <a href="https://www.facebook.com/%D0%9A%D0%B0%D1%80%D0%BB-%D0%9C%D0%B0%D1%80%D0%BA%D1%81-%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D1%83%D0%B5%D1%82-109567247313020" className={styles.socialLink}>
                <img src={LibFac} alt='facebook' className={styles.icon}/>
              </a>
              <a href="https://www.instagram.com/karl_marks_mogilev/" className={styles.socialLink} >
              <img src={LibInst} alt='instagram' className={styles.icon}/>
              </a>
              <a href="https://twitter.com/csgpb_mogilev" className={styles.socialLink}>
              <img src={LibTw} alt='twitter' className={styles.icon}/>
              </a>
              <a href="https://www.youtube.com/channel/UCa5jbG2FcmbVqhcuVRLYlbw" className={styles.socialLink}>
              <img src={LibYou} alt='youTube' className={styles.icon}/>
              </a>
              <a href="https://vk.com/public187729870" className={styles.socialLink}>
              <img src={LibVk} alt='vk' className={styles.icon}/>
              </a>
              
            </div>
            <IconSVG
              src={Admin}
              handleClickIcon={openAdmin}
              className={styles.adminIcon}
            />
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.contacts}>
              <h3>Связаться с нами</h3>
              <h4>
                <strong>Почта : </strong> info@yuordomain.com
              </h4>
              <h4>
                <strong>Телефон : </strong> 74-00-32
              </h4>
              <h4>
                <strong>Почтовый индекс : </strong> 212030
              </h4>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.contacts}>
              <h3>Адрес </h3>
              <h4>ул. Первомайская, 30 Могилев, Беларусь </h4>
              <div className={styles.copy}>
                &copy; 2021 Официальный сайт УК «Централизованная система государственных
                публичных библиотек г. Могилёва».
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
