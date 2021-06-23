import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { getUsers, getCards, getHeroes } from 'store/thunks';
import { User, Image, Puzzle, Medal } from 'assets/icons';
import { IconSVG } from 'components/shared';
import styles from './styles.module.css';

export default function Admin() {
  const dispatch = useDispatch();
  const { heroes } = useSelector((state) => state.dashboard);
  const { users } = useSelector((state) => state.authentication);
  const { cards } = useSelector((state) => state.cardsTape);
  const { quizes } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    dispatch(getCards());
  }, []);
  useEffect(() => {
    dispatch(getHeroes());
  }, []);

  return (
    <div className={styles.admin}>
      <div className={styles.wrapperContent}>
        <div className={styles.wrapperItemUser}>
          <div className={styles.wrapperBody}>
            <h2 className={styles.number}>
              <CountUp start={0} end={users.length} />
            </h2>
            <span className={styles.text}>Пользователи на сайте</span>
          </div>
          <IconSVG src={User} className={styles.icon} />
        </div>
        <div className={styles.wrapperItemCard}>
          <div className={styles.wrapperBody}>
            <h2 className={styles.number}>
              <CountUp start={0} end={cards.length} />
            </h2>
            <span className={styles.text}>Пользовательские открытки</span>
          </div>
          <IconSVG src={Image} className={styles.icon} />
        </div>
        <div className={styles.wrapperItemHero}>
          <div className={styles.wrapperBody}>
            <h2 className={styles.number}>
              <CountUp start={0} end={heroes.length} />
            </h2>
            <span className={styles.text}>Герои города</span>
          </div>
          <IconSVG src={Medal} className={styles.icon} />
        </div>
        <div className={styles.wrapperItemGame}>
          <div className={styles.wrapperBody}>
            <h2 className={styles.number}>
              <CountUp start={0} end={quizes.length} />
            </h2>
            <span className={styles.text}>Развлекательные программы</span>
          </div>
          <IconSVG src={Puzzle} className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
