import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedQuiz } from 'store/actions';
import { Button, Selector } from 'components/shared';
import styles from './styles.module.css';
import Trivia from '../Trivia';
/* eslint consistent-return: ["warn", { "treatUndefinedAsUnspecified": true }] */

export default function GamePopUp({ quizes, selectedQuiz, playGame, notSelected }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.game}>
      <div className={styles.wrapperSelector}>
        <Selector
          options={quizes.map((l) => ({ label: l.quizName, value: l._id }))}
          value={quizes.map((p) => {
            if (p._id === selectedQuiz) return { label: p.quizName };
          })}
          onChange={({ value }) => {
            dispatch(setSelectedQuiz(value));
          }}
          placeholder="Выбирите игру"
        />
        {notSelected && <span>Необходимо выбрать игру!</span>}
      </div>
      <Button onClick={playGame}>Играть!</Button>
    </div>
  );
}

GamePopUp.propTypes = {
  quizes: PropTypes.array.isRequired,
  selectedQuiz: PropTypes.string.isRequired,
  playGame: PropTypes.func.isRequired,
  notSelected: PropTypes.bool.isRequired,
};
