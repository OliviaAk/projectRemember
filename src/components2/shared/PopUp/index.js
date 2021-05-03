import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import IconSVG from "../../../components/shared/Icons";
import Close from '../../../assets/icons/close.svg'

const PopUp = ({ show, closeModal , title}) => {


  return (
    <div className={` ${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>
            <div></div>
            <IconSVG handleClickIcon={closeModal} src={Close}/>
        </div>
        <div className={styles.modalBody}>
            {title}
           

        </div>

      </div>
    </div>
  );
};
export default PopUp;
PopUp.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
  
};
PopUp.defaultProps = {
  show: false,
};