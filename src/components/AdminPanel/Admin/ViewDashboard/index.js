import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroes, setPublishHero } from 'store/thunks';
import styles from './styles.module.css';
import ViewItem from './ViewItem';

export default function ViewDashboard() {
  const dispatch = useDispatch();
  const { heroes } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getHeroes());
  }, []);

  const updateI = (id, isPublish) => {
    dispatch(setPublishHero({ id, isPublish }));
  };
  return (
    <div className={styles.wrapper}>
      {heroes.map((hero, index) => (
        <ViewItem
          id={hero._id}
          image={hero.image}
          name={hero.name}
          dateBirth={hero.dateBirth}
          text={hero.text}
          url={hero.url}
          isPublish={hero.isPublish}
          heroCurrent={hero}
          markAsPublish={() => {
            updateI(hero._id, !hero.isPublish);
          }}
        />
      ))}
    </div>
  );
}
