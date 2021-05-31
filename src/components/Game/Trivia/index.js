import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';

export default function Trivia({ questions, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const [end, setEnd] = useState(false);

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questions, questionNumber]);

  useEffect(() => {
    if (questionNumber > questions.length) {
      setEnd(true);
    }
  }, [questionNumber, questions]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName(styles.answerActive);
    delay(500, () => {
      setClassName(a === question.correct ? styles.correct : styles.wrong);
    });
    delay(1000, () => {
      if (a === question.correct) {
        delay(2000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        delay(500, () => {
          setSelectedAnswer(null);
        });
      }
    });
  };
  return (
    <div className={styles.trivia}>
        <>
          <div className={styles.question}>{question?.question}</div>
          <div className={styles.answers}>
            {question?.answers.map((a) => (
              <div
                className={selectedAnswer === a ? className : styles.answer}
                onClick={() => !selectedAnswer && handleClick(a)}
              >
                {a}
              </div>
            ))}
          </div>
        </>
    </div>
  );
}
Trivia.propTypes = {
  questions: PropTypes.array.isRequired,
  questionNumber: PropTypes.number.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
};
