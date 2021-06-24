import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IconSVG, Selector } from 'components/shared';
import { Delete, Pencil, Saved } from 'assets/icons';
import { deleteQuiz, editQuiz, deleteQuestion, editQuestion } from 'store/thunks';
import styles from './styles.module.css';

const options = [
  { value: true, label: 'Верный' },
  { value: false, label: 'Неверный' },
];
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
  const handleChangeOfNewInputs = (index, e) => {
    const { answers } = state;
    const newInputArr = answers.map((item, i) =>
      index === i ? { ...item, answer: e.target.value } : item
    );
    setState({
      ...state,
      answers: newInputArr,
    });
  };

  const handleChangeSelector = (index, value) => {
    const { answers } = state;
    const newInputArr = answers.map((item, i) =>
      index === i ? { ...item, isRight: value } : item
    );
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
            {state.answers.map((a, index) => (
              <div className={styles.editWrraper}>
                <input
                  value={a.answer}
                  name="a"
                  className={styles.input}
                  onChange={(e) => handleChangeOfNewInputs(index, e)}
                />
                <Selector
                  options={options}
                  value={options.find((el) => el.value === a.isRight)}
                  onChange={({ value }) => {
                    handleChangeSelector(index, value);
                  }}
                />
              </div>
            ))}
          </>
        ) : (
          <div className={styles.answers}>
            {current.answers.map((a) => (
              <div className={styles.itemAnswer}>
                <div
                  className={`${styles.answer} ${
                    a.isRight ? styles.correct : styles.incorrect
                  }`}
                >
                  {a.answer}
                </div>
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
          className={styles.icon}

        />
        <IconSVG handleClickIcon={() => dispatch(deleteQuestion(id))} src={Delete}               className={styles.icon}
/>
      </div>
    </div>
  );
}

GameQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
};
