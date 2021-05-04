import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards, setPublishCard } from '../../../../store/thunks';
import styles from './styles.module.css';
import { EditItem } from '../../../shared';

export default function EditCards() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardsTape);

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Пользовательские открытки</div>
      {cards.map((card, index) => (
        <EditItem
          name={card.name}
          image={card.image}
          user={card.userId}
          description={card.description}
          markAsFavorite={() =>
            dispatch(setPublishCard({ id: card._id, isPublish: !card.isPublish }))
          }
        />
      ))}
    </div>
  );
}
