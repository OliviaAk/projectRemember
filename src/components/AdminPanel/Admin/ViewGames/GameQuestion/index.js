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

  console.log(state);
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
      <div className={styles.items}>{editQ ? <></> : <div />}</div>
      <div className={styles.correct}>
        {editQ ? (
          <input
            className={styles.input}
            value={state.correct}
            onChange={handleChange}
            name="correct"
            type="text"
          />
        ) : (
          current.correct
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
