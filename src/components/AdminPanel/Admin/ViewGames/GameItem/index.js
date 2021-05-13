import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IconSVG, Selector } from 'components/shared';
import { Delete, Pencil, Saved } from 'assets/icons';
import { deleteQuiz, editQuiz, deleteQuestion, editQuestion } from 'store/thunks';
import styles from './styles.module.css';
import GameQuestion from '../GameQuestion';

export default function GameItem({ quizName, id, questions, quizItem }) {
  const [drop, setDropDown] = useState(false);
  const [currentQuestions, setQuestions] = useState([]);
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const arr = [];

    questions.map((q) => {
      if (q.quizId === id) {
        arr.push(q);
      }
    });
    setQuestions(arr);
  }, [questions, id]);

  const saveEdition = () => {
    setEdit(false);
    dispatch(editQuiz(state));
  };

  const editItem = (item) => {
    setState(item);
    setEdit(true);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.wrapperItem}>
      <div className={styles.wrapperContent}>
        <div className={styles.titleBlock}>
          <span>
            <strong>Тема: </strong>
          </span>
          {edit ? (
            <input
              name="quizName"
              type="text"
              onChange={handleChange}
              value={state.quizName}
              className={styles.input}
            />
          ) : (
            <span>{quizName}</span>
          )}
          <div className={styles.titleIcons}>
            <IconSVG
              src={edit ? Saved : Pencil}
              handleClickIcon={
                edit
                  ? saveEdition
                  : () => {
                      editItem(quizItem);
                    }
              }
            />
            <IconSVG handleClickIcon={() => dispatch(deleteQuiz(id))} src={Delete} />
          </div>
        </div>
        <div className={styles.blockInfo}>
          <span>Вопросов {currentQuestions.length}</span>
        </div>
        <div className={styles.btnBlock}>
          <Selector />
          {drop ? (
            <button
              type="button"
              onClick={() => setDropDown(false)}
              className={styles.look}
            >
              Свернуть
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setDropDown(true)}
              className={styles.look}
            >
              Просмотреть
            </button>
          )}
        </div>
      </div>
      {drop && (
        <div className={styles.wrapperQuestion}>
          <div className={styles.titleTable}>
            <div>Вопрос</div>
            <div>Варианты</div>
            <div>Правильный</div>
            <div />
          </div>
          {currentQuestions.map((c) => (
            <GameQuestion id={c._id} current={c} />
          ))}
        </div>
      )}
    </div>
  );
}

GameItem.propTypes = {
  quizName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  quizItem: PropTypes.object.isRequired,
};
