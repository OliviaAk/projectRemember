import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';

export default function Trivia({ questions }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  return (
    <div className={styles.trivia}>
      <div className={styles.answers} />
    </div>
  );
}
Trivia.propTypes = {
  questions: PropTypes.array.isRequired,
};
