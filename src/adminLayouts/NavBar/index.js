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
  Card
} from 'assets/icons';
import styles from './styles.module.css';

export default function NavBar() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openDropDownDash, setOpenDropDownDash] = useState(false);
  const [openDropDownCard, setOpenDropDownCard] = useState(false);
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
        <div className={styles.navLinks}>
          <div className={styles.linkMain}>
            <div className={styles.navText}>
              <IconSVG src={Start} className={styles.icon} />
              <li className={styles.navItem}>Доска памяти</li>
            </div>
            <div
              onClick={() => setOpenDropDownDash(!openDropDownDash)}
              style={{ cursor: 'pointer' }}
            >
              {openDropDown || openDropDownDash ? (
                <img src={bottomArrow} alt="drop" height="15" width="15" />
              ) : (
                <img src={leftArrow} alt="drop" height="15" width="15" />
              )}
            </div>
          </div>
          {(openDropDown || openDropDownDash) && (
            <ul className={styles.dropDown}>
              <Link to="/viewDashboard" className={styles.dropItem}>
                Просмотреть героев
              </Link>
              <Link to="/editDashboard" className={styles.dropItem}>
                Добавить героя
              </Link>
            </ul>
          )}
        </div>
        <div className={styles.navLinks}>
          <div className={styles.linkMain}>
            <div className={styles.navText}>
              <IconSVG src={Card} className={styles.icon} />
              <li className={styles.navItem}>Открытки</li>
            </div>
            <div
              onClick={() => setOpenDropDownCard(!openDropDownCard)}
              style={{ cursor: 'pointer' }}
            >
              {openDropDown || openDropDownCard ? (
                <img src={bottomArrow} alt="drop" height="15" width="15" />
              ) : (
                <img src={leftArrow} alt="drop" height="15" width="15" />
              )}
            </div>
          </div>
          {(openDropDown || openDropDownCard) && (
            <ul className={styles.dropDown}>
              <Link to="/viewCards" className={styles.dropItem}>
                Просмотреть открытки
              </Link>
              <Link to="/editCards" className={styles.dropItem}>
                Опубликовать открытку
              </Link>
            </ul>
          )}
        </div>
        <div className={styles.navLinks}>
          <div className={styles.linkMain}>
            <div className={styles.navText}>
              <IconSVG src={Dice} className={styles.icon} />

              <li className={styles.navItem}>Игры</li>
            </div>
            <div
              onClick={() => setOpenDropDownGame(!openDropDownGame)}
              style={{ cursor: 'pointer' }}
            >
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
        <Link to="/editUsers" className={styles.navLinks}>
          <div className={styles.linkMainWithout}>
            <div className={styles.navText}>
              <IconSVG src={Users} className={styles.icon} />
              <li className={styles.navItem}>Пользователи</li>
            </div>
          </div>
        </Link>
      </ul>
    </div>
  );
}
NavBar.propTypes = {};
