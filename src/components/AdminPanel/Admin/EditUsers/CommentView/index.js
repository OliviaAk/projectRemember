import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { IconSVG } from 'components/shared';
import { Pencil, Saved } from 'assets/icons';
import { removeComment, editComment } from 'store/thunks';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';

export default function CommentView({
  image,
  isPublish,
  link,
  comment,
  commentCurrent,
  id,
  markAsPublish
}) {
  const [edit, setEdit] = useState(false);
  const [stateCard, setState] = useState({});
  const dispatch = useDispatch();
  const saveEdition = () => {
    dispatch(editComment(stateCard))
    setEdit(false);
  };
  const editItem = (hero) => {
    setEdit(true);
    setState(hero);
  };
  const handleChange = (e) => {
    setState({
      ...stateCard,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={styles.wrapperItem}>
      <div className={styles.imageContainer}>
        <div>
          {image && (
            <Image
              cloudName="belarus-remember"
              publicId={image}
              width="210"
              height="180"
              crop="scale"
            />
          )}
          <div className={styles.buttons}>
            {isPublish ? (
              <button
                type="button"
                className={styles.hideBtn}
                onClick={(e) => {
                  markAsPublish();
                  e.stopPropagation();
                }}
              >
                Скрыть на сайте
              </button>
            ) : (
              <button
                type="button"
                className={styles.hideBtn}
                onClick={(e) => {
                  markAsPublish()
                  e.stopPropagation();
                }}
              >
                Опубликовать
              </button>
            )}
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => dispatch(removeComment(id))}
            >
              Удалить с базы
            </button>
          </div>
        </div>
        <div className={styles.wrapperContent}>
          <span>Комментарий добавила Ахмаева Оливия</span>
          <div className={styles.itemInfo}>
            <span>Комментарий:</span>
            {edit ? (
              <textarea
                name="comment"
                type="text"
                value={stateCard.comment}
                className={styles.text}
                onChange={handleChange}

              />
            ) : (
              <span>{comment}</span>
            )}

            {edit ? (
              <IconSVG src={Saved} handleClickIcon={saveEdition} className={styles.icon} />
            ) : (
              <IconSVG
                src={Pencil}
                className={styles.icon}
                handleClickIcon={() => {
                  editItem(commentCurrent);
                }}
              />
            )}
          </div>
          {link && (
            <div className={styles.itemInfo}>
              <span>Сылка:</span>

              {edit ? (
                <input
                  name="link"
                  type="text"
                  onChange={handleChange}
                  value={stateCard.link}
                  className={styles.input}
                />
              ) : (
                <a href={link} className={styles.simpleTextInput}>
                  {link}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

CommentView.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isPublish: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  commentCurrent: PropTypes.object.isRequired,
  markAsPublish: PropTypes.func.isRequired,
};
