import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPublishCard, getCards , editCard} from 'store/thunks';
import styles from './styles.module.css';
import CardView from './CardView';

export default function EditCards() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardsTape);

  useEffect(() => {
    dispatch(getCards());
  }, []);
  const updateI = (id, isPublish) => {
    dispatch(setPublishCard({ id, isPublish }));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContainer}>
        {cards.map((card) => (
          <CardView
            id={card._id}
            image={card.image}
            name={card.name}
            dateBirth={card.dateBirth}
            description={card.description}
            isPublish={card.isPublish}
            cardCurrent={card}
            user={card.userId}
            markAsPublish={() => {
              updateI(card._id, !card.isPublish);
            }}
          />
        ))}
      </div>
    </div>
  );
}
