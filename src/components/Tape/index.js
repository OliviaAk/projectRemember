import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getCard, getPublishCards } from 'store/thunks';
import styles from './styles.module.css';
import Item from './Item'

export default function Tape() {
  const [openedCard, setIsOpened]= useState(false)

  const history = useHistory();
  const dispatch = useDispatch();
  const { publishCards } = useSelector((state) => state.cardsTape);

  const openCard = (cardId)=>{
    dispatch(getCard(cardId));
    history.push('/presentation');
  }

  useEffect(() => {
    dispatch(getPublishCards());
  }, []);

  return (
    <div className={styles.tape}>
      <div className={styles.tapeContainer}>
        {publishCards.map((card, index) => (
            <Item name={card.name} image={card.image} user={card.userId}
             setIsOpened={()=>{openCard(card._id)}}/>
          ))}
      </div>
    </div>
  );
}
