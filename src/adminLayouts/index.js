import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import NavBar from "./NavBar";
import styles from "./styles.module.css";


function Layout(props) {
 

  return (
    <div className={props.class}>
      <div className={styles.top}>
        <NavBar />
        <div className={styles.mainContext}>
         
            <Header  />
         
        {props.children}
        </div>
      </div>
    </div>
  );
}
export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
  class: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
