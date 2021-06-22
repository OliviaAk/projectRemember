import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedQuiz } from 'store/actions';
import { getQuiz, getCurrentQuestions } from 'store/thunks';
import { Button, PopUp } from 'components/shared';
import GamePopUp from './GamePopUp';
import styles from './styles.module.css';

export default function Game() {
  const [openModal, setOpenedModal] = useState(true);
  const [quizName, setQuizName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [notSelected, setNotSelected] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const { quizes, selectedQuiz, currentQuestions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (selectedQuiz !== null) {
      setNotSelected(false);
    }
  }, [selectedQuiz]);

  useEffect(() => {
    dispatch(getQuiz());
  }, []);

  useEffect(() => {
    if (quizes.length > 0 && selectedQuiz) {
      const findQuiz = quizes.find((q) => q._id === selectedQuiz);
      setQuizName(findQuiz.quizName);
    }
  }, [quizes, selectedQuiz]);

  const playGame = () => {
    if (selectedQuiz !== null) {
      dispatch(getCurrentQuestions(selectedQuiz));
      setOpenedModal(false);
    } else {
      setNotSelected(true);
    }
  };

  const chooseAnswer = (answer) => {
    if (answer) {
      setScore(score + 1);
    }
    setClicked(true);
  };
  const clikedHandleNext = () => {
    setClicked(false);
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };
  const closedPopUp = () => {
    setOpenedModal(false);
    history.push('/');
    dispatch(setSelectedQuiz(null));
  };
  const exitGame = () => {
    history.push('/');
    dispatch(setSelectedQuiz(null));
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };
  const chooseAnotherGame = () => {
    dispatch(setSelectedQuiz(null));
    setOpenedModal(true);
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <>
      {currentQuestions.length && quizName && (
        <div className={styles.game}>
          {showScore ? (
            <div>
              Конец {score} из {currentQuestions.length}
              <button type="button" onClick={exitGame}>
                Выход
              </button>
              <button type="button" onClick={chooseAnotherGame}>
                Выбрать другую игру
              </button>
            </div>
          ) : (
            <>
              <div className={styles.wrapperItem}>
                <div className={styles.title}>{quizName}</div>

                <div className={styles.wrraper}>
                  <div className={styles.questionNumber}>
                    Вопрос {currentQuestion + 1} из {currentQuestions.length}
                  </div>
                  <div className={styles.questionText}>
                    {currentQuestions[currentQuestion].question}
                  </div>
                  <div className={styles.itemsQ}>
                    {currentQuestions[currentQuestion].answers.map((i) => (
                      <div
                        onClick={() => {
                          chooseAnswer(i.isRight);
                        }}
                        className={`${styles.questionItem} ${
                          clicked && i.isRight ? styles.correct : styles.wrong
                        }`}
                      >
                        {i.answer}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.btnConrainer}>
                  <button
                    type="button"
                    onClick={clikedHandleNext}
                    className={styles.nextBtn}
                  >
                    Следующий
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <PopUp
        show={openModal}
        closeModal={closedPopUp}
        isClose
        wrapperStyles={{ width: '650px', height: '450px', top: '50%  ' }}
      >
        <GamePopUp
          closeModal={() => {
            setOpenedModal(false);
          }}
          quizes={quizes}
          selectedQuiz={selectedQuiz}
          playGame={playGame}
          notSelected={notSelected}
        />
      </PopUp>
    </>
  );
}
