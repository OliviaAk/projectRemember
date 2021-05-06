import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Upload } from 'assets/icons';
import { IconSVG, Selector, Spinner, Modal } from 'components/shared';
import { getHeroes, createHero } from 'store/thunks';
import Person from 'assets/images/person1.png';
import styles from './styles.module.css';

export default function ViewDashboard() {
  const dispatch = useDispatch();
  const { heroes, loadingHero, hero } = useSelector((state) => state.dashboard);

  return <div className={styles.wrapper} />;
}
