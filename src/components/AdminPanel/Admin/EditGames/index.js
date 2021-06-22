import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuiz, getQuiz, createQuestion, getQuestions } from 'store/thunks';
import { Button, Selector } from 'components/shared';
import styles from './styles.module.css';

const options = [
  { value: true, label: 'Верный' },
  { value: false, label: 'Неверный' },
];
export default function EditGames() {
  const [quizName, setName] = useState('');
  const [count, setCount] = useState(1);
  const [question, setQuestion] = useState('');
  const [answer1, setAnswer1] = useState({ answer: '', isRight: false });
  const [answer2, setAnswer2] = useState({ answer: '', isRight: false });
  const [answer3, setAnswer3] = useState({ answer: '', isRight: false });
  const [answer4, setAnswer4] = useState({ answer: '', isRight: false });
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
    dispatch(createQuestion({ question, answers: array, quizId: currentQuiz._id }));
    setCount(count + 1);
    setQuestion('');
    setAnswer1({ answer: '', isRight: false });
    setAnswer2({ answer: '', isRight: false });
    setAnswer3({ answer: '', isRight: false });
    setAnswer4({ answer: '', isRight: false });
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
          )}
        </div>
      </div>
    </div>
  );
}
