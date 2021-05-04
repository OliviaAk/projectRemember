import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import NavBar from './NavBar';
import styles from './styles.module.css';

function Layout({ children }) {
  return (
    <div>
      <div className={styles.top}>
        <NavBar />
        <div className={styles.mainContext}>
          <Header />

          {children}
        </div>
      </div>
    </div>
  );
}
export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};
Layout.defaultProps = {
  children: React.element,
};
