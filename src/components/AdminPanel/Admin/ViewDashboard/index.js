import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroes } from 'store/thunks';
import styles from './styles.module.css';
import ViewItem from './ViewItem';

export default function ViewDashboard() {
  const dispatch = useDispatch();
  const { heroes } = useSelector((state) => state.dashboard);


  useEffect(() => {
    dispatch(getHeroes());
  }, []);


  return (
    <div className={styles.wrapper}>
      {heroes.map((hero, index) => (
          <ViewItem image={hero.image} name={hero.name} dateBirth={hero.dateBirth} text={hero.text} url={hero.url} isPublish={hero.isPublish} heroCurrent={hero}/>
      ))}
    </div>
  );
}
