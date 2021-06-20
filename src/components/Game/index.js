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
  const [questionNumber, setQuestionNumber] = useState(1);
  const [openModal, setOpenedModal] = useState(true);
  const [notSelected, setNotSelected] = useState(false);
  const [coordinate, setCoordinate] = useState();
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
    setQuestionNumber();
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
  const drawLine = (index) => {
    setCoordinate(index);
  };

  return (
    <>
      {openModal ? (
        <div />
      ) : (
        <>
          <div className={styles.game}/>
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
