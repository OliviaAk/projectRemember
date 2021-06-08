import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Start from 'assets/images/unnamed.png';
import Solder from 'assets/images/solder.gif';
import { set } from 'js-cookie';
import styles from './styles.module.css';

export default function ColorCard({ onHandleClick, className, id, coordinate }) {
  const [it, setIt] = useState(false);

  useEffect(() => {
    if (id === coordinate) {
      setIt(true);
    }
  }, [coordinate]);
  return (
    <div
      className={` ${styles.card}`}
      style={{ width: '120px', display: 'flex' }}
      onClick={onHandleClick}
    >
      <img src={Start} alt="" width="50" height="50" />
      {it && (
        <div className={styles.line}>
          <img src={Solder} alt="" width="50" height="50" />
        </div>
      )}
    </div>
  );
}

ColorCard.propTypes = {
  onHandleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  coordinate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
