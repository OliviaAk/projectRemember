import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from 'react-router-dom';
import { getCard, getPublishCards } from 'store/thunks';
import styles from './styles.module.css';
import Item from './Item';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 4,
  },
  smallDesktop: {
    breakpoint: { max: 1100, min: 991 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 550 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};

export default function Tape() {

  const history = useHistory();
  const dispatch = useDispatch();
  const { publishCards } = useSelector((state) => state.cardsTape);

  const openCard = (cardId) => {
    dispatch(getCard(cardId));
    history.push(`/presentation`);
  };

  useEffect(() => {
    dispatch(getPublishCards());
  }, []);

  return (
    <div className={styles.tape}>
      <div className={styles.tapeContainer}>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots
          infinite
          autoPlaySpeed={700}
          transitionDuration={200}
          className={styles.carousel}
        >
          {publishCards.map((card, index) => (
            <Item
              name={card.name}
              image={card.image}
              user={card.userId}
              setIsOpened={() => {
                openCard(card._id);
              }}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
