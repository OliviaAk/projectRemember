import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { IconSVG } from 'components/shared';
import { Pencil, Saved } from 'assets/icons';
import { editHero, deleteHero, setPublishHero } from 'store/thunks';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';

export default function ViewItem({
  image,
  name,
  dateBirth,
  text,
  url,
  heroCurrent,
  id,
  isPublish,
  markAsPublish,
}) {
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const saveEdition = () => {
    setEdit(false);
    dispatch(editHero(state));
  };

  const editItem = (hero) => {
    setState(hero);
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
      <div className={styles.imageContainer}>
        <Image
          cloudName="belarus-remember"
          publicId={image}
          width="230"
          height="270"
          crop="scale"
        />
        <div className={styles.buttons}>
          {isPublish ? (
            <button
              type="button"
              className={styles.submit}
              onClick={(e) => {
                e.stopPropagation();
                markAsPublish();
              }}
            >
              Скрыть на сайте
            </button>
          ) : (
            <button
              type="button"
              className={styles.submit}
              onClick={(e) => {
                e.stopPropagation();
                markAsPublish();
              }}
            >
              Опубликовать
            </button>
          )}
          {/* <button type="submit" className={styles.submit}>
          Опубликовать
        </button> */}
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => dispatch(deleteHero(id))}
          >
            Удалить с базы
          </button>
        </div>
      </div>
      <div className={styles.wrapperContent}>
        <div className={styles.itemInfo}>
          {edit ? (
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={state.name}
              className={styles.input}
            />
          ) : (
            <span>{name}</span>
          )}

          {edit ? (
            <IconSVG src={Saved} handleClickIcon={saveEdition} className={styles.icon}/>
          ) : (
            <IconSVG
              src={Pencil}
              className={styles.icon}
              handleClickIcon={() => {
                editItem(heroCurrent);
              }}
            />
          )}
        </div>
        {dateBirth && (
          <div className={styles.itemInfo}>
            {edit ? (
              <input
                name="dateBirth"
                type="text"
                onChange={handleChange}
                value={state.dateBirth}
                className={styles.input}
              />
            ) : (
              <span>{dateBirth}</span>
            )}
          </div>
        )}
        <div className={styles.itemInfo}>
          {edit ? (
            <input
              name="url"
              type="text"
              onChange={handleChange}
              value={state.url}
              className={styles.inputMap}
            />
          ) : (
            <span>
              <strong>Карта </strong>
              <a className={styles.mapLink} href={url}>
                {url}
              </a>
            </span>
          )}
        </div>
        <div className={edit ? styles.itemEdit : styles.itemInfo}>
          <>
            <span>
              <strong>Сведения: </strong>
            </span>
          </>
          {edit ? (
            <textarea
              name="text"
              type="text"
              value={state.text}
              className={styles.text}
              onChange={handleChange}
            />
          ) : (
            <span>{text}</span>
          )}
        </div>
      </div>
    </div>
  );
}

ViewItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dateBirth: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  heroCurrent: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  isPublish: PropTypes.bool.isRequired,
  markAsPublish: PropTypes.func.isRequired,
};
