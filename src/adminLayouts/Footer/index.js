import React from "react";
import styles from "./styles.module.css";
import { IconSVG } from "../../components/shared";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerHeader}>
          <img className={styles.footerLogo} />
          <span className={styles.downloadText}>Download our Mobile App</span>
        </div>
        <div className={styles.footerLinks}>
         
        </div>
        <div>
          <p className={styles.contactUs}>Contact Us</p>
          <p className={styles.contactEmail}>acac-infos@mail.com</p>
          <div className={styles.contactsIcons}>
            <IconSVG src={Facebook} className={styles.footerIcon} />
            <IconSVG src={Instagram} className={styles.footerIcon} />
          </div>
        </div>
        <div>
          <p className={styles.fqa}>FQA</p>
          <ul className={styles.fqaItems}>
            <li>How do I register the roup classes?</li>
            <li>How do I register the roup classes?</li>
            <li>How do I register the roup classes?</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>© 2020 All rights reserved. ACAC is a brand of ACAC Enterprises, Inc.</p>
      </div>
    </div>
  );
}
