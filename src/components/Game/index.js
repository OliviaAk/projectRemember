import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedQuiz } from 'store/actions';
import {
  createQuiz,
  getQuiz,
  createQuestion,
  getQuestions,
  getCurrentQuestions,
} from 'store/thunks';
import { Button, PopUp } from 'components/shared';
import GamePopUp from './GamePopUp';
import styles from './styles.module.css';

export default function Game() {
  const [openModal, setOpenedModal] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [notSelected, setNotSelected] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const { quizes, currentQuiz, questions, selectedQuiz, currentQuestions } = useSelector(
    (state) => state.quiz
  );
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
  };

  return (
    <>
      {currentQuestions.length && (
        <div className={styles.game}>
          {showScore ? (
            <div>
              Конец {score} из {currentQuestions.length}
            </div>
          ) : (
            <>
              <div className={styles.questionNumber}>
                Вопрос {currentQuestion + 1} из {currentQuestions.length}
              </div>
              <div className={styles.questionText}>
                {currentQuestions[currentQuestion].question}
              </div>
              <ul>
                {currentQuestions[currentQuestion].answers.map((i) => (
                  <div
                    onClick={() => {
                      chooseAnswer(i.isRight);
                    }}
                  >
                    {i.answer}
                  </div>
                ))}
              </ul>
              <button type="button" onClick={clikedHandleNext}>
                Next
              </button>
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
