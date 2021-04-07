import React from 'react';
import styles from './styles.module.css'
import {  useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {navLinks} from '../../mocks/navLinks'

const Navbar = ({}) => {


 

  return (
    <div>
      <div className={styles.navBar}>
  
        <Link to="/" className={styles.navbarHeader}>
          <img className={styles.navBarLogo}  alt="logo" />
        </Link>
      
      <div className={styles.navMenu}>
        {navLinks.map((link, index) => {
          return (
            <Link key={index} to={link.path} className={styles.navLink}>
                {link.title}
            </Link>
          );
        })}
      </div>
    </div>

    </div>
    
  );
}

export default Navbar;