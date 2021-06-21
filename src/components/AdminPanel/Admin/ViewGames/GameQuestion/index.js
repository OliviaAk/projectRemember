import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IconSVG, Selector } from 'components/shared';
import { Delete, Pencil, Saved } from 'assets/icons';
import { deleteQuiz, editQuiz, deleteQuestion, editQuestion } from 'store/thunks';
import styles from './styles.module.css';

export default function GameQuestion({ id, current }) {
  const [editQ, setEditQ] = useState(false);
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const saveEdition = () => {
    setEditQ(false);
    dispatch(editQuestion(state));
  };

  const editItem = (item) => {
    setState(item);
    setEditQ(true);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeOfNewInputs = (index, e) => {
    const { answers } = state;
    const newInputArr = answers.map((item, i) => (index === i ? e.target.value : item));
    setState({
      ...state,
      answers: newInputArr,
    });
  };

  return (
    <div className={styles.table}>
      <div className={styles.question}>
        {editQ ? (
          <textarea
            className={styles.text}
            value={state.question}
            onChange={handleChange}
            name="question"
            type="text"
          />
        ) : (
          current.question
        )}
      </div>
      <div className={styles.items}>
        {editQ ? (
          <>
            {current.answers.map((a, index) => (
              <>
                <input
                  value={a.answer}
                  name="a"
                  className={styles.input}
                  onChange={(e) => handleChangeOfNewInputs(index, e)}
                />
                <input
                  value={a.isRight}
                  name="a"
                  className={styles.input}
                  onChange={(e) => handleChangeOfNewInputs(index, e)}
                />
              </>
            ))}
          </>
        ) : (
          <div className={styles.answers}>
            {current.answers.map((a) => (
              <div>
                <span>{a.answer}</span>
                <span>{a.isRight ? 'Верный' : 'Неверный'}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.icons}>
        <IconSVG
          src={editQ ? Saved : Pencil}
          handleClickIcon={
            editQ
              ? saveEdition
              : () => {
                  editItem(current);
                }
          }
        />
        <IconSVG handleClickIcon={() => dispatch(deleteQuestion(id))} src={Delete} />
      </div>
    </div>
  );
}

GameQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
};
