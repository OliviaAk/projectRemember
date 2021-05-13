import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuiz, getQuiz, createQuestion, getQuestions } from 'store/thunks';
import { Button, Selector } from 'components/shared';
import styles from './styles.module.css';

export default function EditGames() {
  const [quizName, setName] = useState('');
  const [count, setCount] = useState(1);
  const [question, setQuestion] = useState('');
  const [correct, setRight] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { quizes, currentQuiz } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getQuiz());
  }, []);
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  const createNewQuizName = () => {
    if (quizName === '') {
      setError(true);
    } else {
      dispatch(createQuiz({ quizName }));
      setName('');
      setError(false);
    }
  };

  const sendQuestion = () => {
    const array = [];
    array.push(answer1, answer2, answer3, answer4);
    dispatch(
      createQuestion({ question, answers: array, correct, quizId: currentQuiz._id })
    );
    setCount(count + 1);
    setQuestion('');
    setRight('');
    setAnswer1('');
    setAnswer2('');
    setAnswer3('');
    setAnswer4('');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContainer}>
        <div className={styles.header}>
          <div className={styles.inputError}>
            <input
              name="quizName"
              placeholder="Введите название игры"
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
            {error ? (
              <span className={styles.error}>Необходимо ввести название название!</span>
            ) : (
              <span />
            )}
          </div>
          <Button onClick={createNewQuizName} buttonSize="submit">
            Добавить
          </Button>
        </div>
        <div className={styles.wrapperQuestion}>
          {currentQuiz !== null && (
            <>
              <span className={styles.title}>{currentQuiz.quizName}</span>

              <div className={styles.textContainer}>
                <div className={styles.textItem}>
                  <span className={styles.text}>Вопрос {count}</span>
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
                  <input
                    placeholder="Ответ 1"
                    name="answer1"
                    value={answer1}
                    type="text"
                    className={styles.inputItem}
                    onChange={(e) => {
                      setAnswer1(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Ответ 2"
                    type="text"
                    name="answer2"
                    value={answer2}
                    className={styles.inputItem}
                    onChange={(e) => {
                      setAnswer2(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Ответ 3"
                    type="text"
                    name="answer3"
                    value={answer3}
                    className={styles.inputItem}
                    onChange={(e) => {
                      setAnswer3(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Ответ 4"
                    type="text"
                    value={answer4}
                    className={styles.inputItem}
                    onChange={(e) => {
                      setAnswer4(e.target.value);
                    }}
                  />
                </div>
                <div className={styles.textItem}>
                  <span className={styles.text}>Правильный вариант</span>
                  <input
                    placeholder="Ответ"
                    type="text"
                    className={styles.inputItemR}
                    value={correct}
                    onChange={(e) => {
                      setRight(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.submit}>
                <Button onClick={sendQuestion} buttonColor="submit">
                  Сохранить
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
