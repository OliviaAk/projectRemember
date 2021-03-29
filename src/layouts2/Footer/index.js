import React from 'react';
import PropTypes from 'prop-types';
import FooterNav from '../partials/FooterNav';
import FooterSocial from '../partials/FooterSocial';
import styles from './styles.module.css'

const Footer = ({}) => {

 

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.siteFooterInner} >
          <div className={styles.footerTop}>
            <FooterSocial className={styles.footerSocial}/>
          </div>
          <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>All right reserved</div>
          <FooterNav className={styles.footerNav} />
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