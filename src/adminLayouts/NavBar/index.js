import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import styles from "./styles.module.css";
import { navLinks } from "../../mocks/LinksData";
import IconSVG  from "../../components/shared/Icons";

export default function NavBar() {

  return (
    <div className={styles.navBar}>
        <Link to="/" className={styles.navbarHeader}>
          <img className={styles.navBarLogo} src={Logo} alt="logo" />
        </Link>
      
      <ul className={styles.navMenu}>
        {navLinks.map((link, index) => {
          return (
            <Link key={index} to={link.path} className={styles.navLinks}>
              <li className={styles.navItem}>
                {link.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
NavBar.propTypes = {
  isNavbarOpen: PropTypes.bool,
  isTablet: PropTypes.number,
};
