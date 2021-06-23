import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, IconSVG } from 'components/shared';
import {
  DownCaret,
  bottomArrow,
  leftArrow,
  Home,
  Users,
  Dice,
  Start,
  Card,
} from 'assets/icons';
import styles from './styles.module.css';

export default function NavBar() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openDropDownDash, setOpenDropDownDash] = useState(false);
  const [openDropDownGame, setOpenDropDownGame] = useState(false);

  return (
    <div className={styles.navBar}>
      <div className={styles.navbarHeader}>
        <button
          type="button"
          className={styles.rectangle}
          onClick={() => setOpenDropDown(!openDropDown)}
        >
          <IconSVG src={DownCaret} />
        </button>
      </div>

      <ul className={styles.navMenu}>
        <Link to="/admin" className={styles.navLinks}>
          <div className={styles.linkMainWithout}>
            <div className={styles.navText}>
              <IconSVG src={Home} className={styles.icon} />
              <li className={styles.navItem}>Главная</li>
            </div>
          </div>
        </Link>
        <div
          className={styles.navLinks}
          onClick={() => setOpenDropDownDash(!openDropDownDash)}
        >
          <div className={styles.linkMain}>
            <div className={styles.navText}>
              <IconSVG src={Start} className={styles.icon} />
              <li className={styles.navItem}>Доска памяти</li>
            </div>
            <div style={{ cursor: 'pointer' }}>
              {openDropDown || openDropDownDash ? (
                <img src={bottomArrow} alt="drop" height="15" width="15" />
              ) : (
                <img src={leftArrow} alt="drop" height="15" width="15" />
              )}
            </div>
          </div>

          <ul
            className={openDropDown || openDropDownDash ? styles.dropDown : styles.noDrop}
          >
            <Link to="/viewDashboard" className={styles.dropItem}>
              Просмотреть героев
            </Link>
            <Link to="/editDashboard" className={styles.dropItem}>
              Добавить героя
            </Link>
          </ul>
        </div>
        <div
          className={styles.navLinks}
          onClick={() => setOpenDropDownGame(!openDropDownGame)}
        >
          <div className={styles.linkMain}>
            <div className={styles.navText}>
              <IconSVG src={Dice} className={styles.icon} />

              <li className={styles.navItem}>Игры</li>
            </div>
            <div style={{ cursor: 'pointer' }}>
              {openDropDown || openDropDownGame ? (
                <img src={bottomArrow} alt="drop" height="15" width="15" />
              ) : (
                <img src={leftArrow} alt="drop" height="15" width="15" />
              )}
            </div>
          </div>
          {(openDropDown || openDropDownGame) && (
            <ul className={styles.dropDown}>
              <Link to="/viewGames" className={styles.dropItem}>
                Просмотреть игры
              </Link>
              <Link to="/editGames" className={styles.dropItem}>
                Добавить игру
              </Link>
            </ul>
          )}
        </div>
        <Link to="/editCards" className={styles.navLinks}>
          <div className={styles.linkMainWithout}>
            <div className={styles.navText}>
              <IconSVG src={Card} className={styles.icon} />
              <li className={styles.navItem}>Открытки</li>
            </div>
          </div>
        </Link>
        <Link to="/editUsers" className={styles.navLinks}>
          <div className={styles.linkMainWithout}>
            <div className={styles.navText}>
              <IconSVG src={Users} className={styles.icon} />
              <li className={styles.navItem}>Лента памяти</li>
            </div>
          </div>
        </Link>
      </ul>
    </div>
  );
}
NavBar.propTypes = {};
