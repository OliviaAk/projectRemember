import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import styles from './styles.module.css';
import Trivia from './Trivia';
import GamePopUp from './GamePopUp';

export default function Game() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [openModal, setOpenedModal] = useState(true);
  const [notSelected, setNotSelected] = useState(false);

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
    setQuestionNumber(1);
  }, []);

  const playGame = () => {
    if (selectedQuiz !== null) {
      dispatch(getCurrentQuestions(selectedQuiz));
      setOpenedModal(false);
    } else {
      setNotSelected(true);
    }
  };

  const exit = () => {
    dispatch(setSelectedQuiz(null));
    setQuestionNumber(1);
    history.push('/');
  };
  const changeGame = () => {
    dispatch(setSelectedQuiz(null));
    setOpenedModal(true);
    setQuestionNumber(1);
  };

  return (
    <>
      {openModal ? (
        <div />
      ) : (
        <>
          <div className={styles.game}>
            <Trivia
              questions={currentQuestions}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
          <div className={styles.menu}>
            <Button onClick={changeGame}>Выбрать другую игру</Button>
            <Button onClick={exit}>Выйти</Button>
          </div>
        </>
      )}
      <PopUp
        show={openModal}
        closeModal={() => {
          setOpenedModal(false);
        }}
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
