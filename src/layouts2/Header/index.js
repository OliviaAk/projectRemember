import React, { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Button from "../../components/shared/Button";
import IconSVG from "../../components/shared/Icons";
import LogoType from '../../assets/images/logotype.jpg';


export default function Header({ user }) {
 
  return (
    <div className={styles.header}>
      
      <div className={styles.container}>
        <div>
        </div>
        <div>
          <span></span>
        </div>
        <div
          className={styles.userBlock}
        >
          
      <div className={styles.user}>
      

       </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    _id: PropTypes.string,
  }),
  handleLogout: PropTypes.func,
};
