import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Selector } from 'components/shared';
import { createQuestion } from 'store/thunks';
import styles from './styles.module.css';

const options = [
  { value: true, label: 'Верный' },
  { value: false, label: 'Неверный' },
];
export default function AddQuestion({ currentQuestions, id }) {
  const [question, setQuestion] = useState('');
  const [answer1, setAnswer1] = useState({ answer: '', isRight: false });
  const [answer2, setAnswer2] = useState({ answer: '', isRight: false });
  const [answer3, setAnswer3] = useState({ answer: '', isRight: false });
  const [answer4, setAnswer4] = useState({ answer: '', isRight: false });
  const dispatch = useDispatch();

  const sendQuestion = () => {
    const array = [];
    array.push(answer1, answer2, answer3, answer4);
    dispatch(createQuestion({ question, answers: array, quizId: id }));
    setQuestion('');
    setAnswer1({ answer: '', isRight: false });
    setAnswer2({ answer: '', isRight: false });
    setAnswer3({ answer: '', isRight: false });
    setAnswer4({ answer: '', isRight: false });
  };

  return (
    <>
      <div className={styles.textContainer}>
        <span className={styles.text}>Вопрос {currentQuestions.length + 1}</span>

        <div className={styles.textItem}>
          <input
            placeholder="Текст вопроса"
            type="text"
            value={question}
            name="question"
            className={styles.inputItemQ}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </div>
        <div className={styles.textItem}>
          <span className={styles.text}>Варианты ответа</span>
          <div className={styles.item}>
            <input
              placeholder="Ответ 1"
              name="answer1"
              value={answer1.answer}
              type="text"
              className={styles.inputItem}
              onChange={(e) => {
                setAnswer1({ ...answer1, answer: e.target.value });
              }}
            />
            <Selector
              options={options}
              value={options.find((el) => el.value === answer1.isRight)}
              onChange={({ value }) => {
                setAnswer1({ ...answer1, isRight: value });
              }}
            />
          </div>
          <div className={styles.item}>
            <input
              placeholder="Ответ 2"
              type="text"
              name="answer2"
              value={answer2.answer}
              className={styles.inputItem}
              onChange={(e) => {
                setAnswer2({ ...answer2, answer: e.target.value });
              }}
            />
            <Selector
              options={options}
              value={options.find((el) => el.value === answer2.isRight)}
              onChange={({ value }) => {
                setAnswer2({ ...answer2, isRight: value });
              }}
            />
          </div>
          <div className={styles.item}>
            <input
              placeholder="Ответ 3"
              type="text"
              name="answer3"
              value={answer3.answer}
              className={styles.inputItem}
              onChange={(e) => {
                setAnswer3({ ...answer3, answer: e.target.value });
              }}
            />
            <Selector
              options={options}
              value={options.find((el) => el.value === answer3.isRight)}
              onChange={({ value }) => {
                setAnswer3({ ...answer3, isRight: value });
              }}
            />
          </div>
          <div className={styles.item}>
            <input
              placeholder="Ответ 4"
              type="text"
              value={answer4.answer}
              className={styles.inputItem}
              onChange={(e) => {
                setAnswer4({ ...answer4, answer: e.target.value });
              }}
            />
            <Selector
              options={options}
              value={options.find((el) => el.value === answer4.isRight)}
              onChange={({ value }) => {
                setAnswer4({ ...answer4, isRight: value });
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.submit}>
        <Button onClick={sendQuestion} buttonColor="submit">
          Сохранить
        </Button>
      </div>
    </>
  );
}

AddQuestion.propTypes = {
  currentQuestions: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
