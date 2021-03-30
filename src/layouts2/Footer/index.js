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
          <h3>We Are Social</h3>
            <p>
            Aliquam tempus ante placerat,
            consectetur tellus nec, porttitor nulla.
            </p>
            <div class="social-below">
            <a href="#" class="btn button-custom btn-custom-two" > Facebook</a>
            <a href="#" class="btn button-custom btn-custom-two" > Twitter</a>
            <a href="#" class="btn button-custom btn-custom-two" > Google +</a>
            </div>

          </div>
          <div className={styles.footerItem}>
          <div class="contact-wrapper">
            <h3>Quick Contact</h3>
            <h4><strong>Email : </strong> info@yuordomain.com </h4>
            <h4><strong>Call : </strong> +09-88-99-77-55 </h4>
            <h4><strong>Skype : </strong> Yujhaeu78 </h4>
            </div>
          </div>
          <div className={styles.footerItem}>
          <div class="contact-wrapper">
            <h3>Address : </h3>
            <h4>230/45 , New way Lane , </h4>
            <h4>United States</h4>
            <div class="footer-div" >
            &copy; 2015 YourDomain | <a href="http://www.designbootstrap.com/" target="_blank" >by DesignBootstrp</a>
            </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.siteFooterInner} >
          <div className={styles.footerTop}>
            <FooterSocial className={styles.footerSocial}/>
          </div>
          <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>All right reserved</div>
          <FooterNav className={styles.footerNav} />
          </div>
        </div> */}
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