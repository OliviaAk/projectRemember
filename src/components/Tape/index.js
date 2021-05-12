import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import styles from './styles.module.css';
import { getPublishCards } from '../../store/thunks';
import Item from './Item';
import { rightArrow, leftArrow } from '../../assets/icons';
import { IconSVG } from '../shared';

export default function Tape() {
  const dispatch = useDispatch();
  const { publishCards } = useSelector((state) => state.cardsTape);

  useEffect(() => {
    dispatch(getPublishCards());
  }, []);

  return (
    <div className={styles.tape}>
      <div className={styles.tapeContainer}>
        {publishCards.map((card, index) => (
            <Item name={card.name} image={card.image} user={card.userId}/>
          ))}
      </div>
    </div>
  );
}
