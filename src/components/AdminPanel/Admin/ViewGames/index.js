import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuiz, getQuestions } from 'store/thunks';
import styles from './styles.module.css';
import GameItem from './GameItem';

export default function ViewGames() {
  const dispatch = useDispatch();
  const { quizes, questions } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getQuiz());
  }, []);

  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  return (
    <div className={styles.wrapper}>
      {quizes.map((quiz) => (
        <GameItem
          quizName={quiz.quizName}
          id={quiz._id}
          questions={questions}
          quizItem={quiz}
        />
      ))}
    </div>
  );
}
