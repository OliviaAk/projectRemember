import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuiz, getQuiz, createQuestion, getQuestions } from 'store/thunks';
import styles from './styles.module.css';
import Trivia from './Trivia';

export default function Game() {
  const { quizes, currentQuiz, questions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  console.log(questions);
  
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  useEffect(() => {
    dispatch(getQuiz());
  }, []);

  return (
    <div>
      <Trivia questions={questions} />
    </div>
  );
}
