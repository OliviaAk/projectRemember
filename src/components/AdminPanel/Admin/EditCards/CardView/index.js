import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { IconSVG } from 'components/shared';
import { Pencil, Saved, Email } from 'assets/icons';
import { editCard, deleteCard } from 'store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import styles from './styles.module.css';

init('user_qnYBzXzbTnUo4Umjz0KQ8');
export default function CardView({
  image,
  name,
  dateBirth,
  description,
  cardCurrent,
  id,
  isPublish,
  markAsPublish,
  user,
}) {
  const [edit, setEdit] = useState(false);
  const [stateCard, setState] = useState({});
  const [userName, setUserName] = useState({});
  const emailConfig = {
    email: userName.email,
    firstName: userName.name,
    message: ` ${userName.name}, спасибо за участие. Ваша открыка одобрена и опубликована на сайте, можете поделится ей с друзьями! `,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message, firstName } = emailConfig;
    const templateParams = {
      from_name: 'Библиотека',
      to_name: firstName,
      to_email: email,
      message,
    };
    emailjs.send('service_fv9vcli', 'template_9doekh9', templateParams);
  };
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.authentication);

  useEffect(() => {
    const findName = users.find((u) => u._id === user);
    setUserName(findName);
  }, [user, users]);
  const saveEdition = () => {
    setEdit(false);
    dispatch(editCard(stateCard));
  };

  const editItem = (hero) => {
    setState(hero);
    setEdit(true);
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
              className={styles.hideBtn}
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
              className={styles.hideBtn}
              onClick={(e) => {
                e.stopPropagation();
                markAsPublish();
              }}
            >
              Опубликовать
            </button>
          )}
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => dispatch(deleteCard(id))}
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
              value={stateCard.name}
              className={styles.input}
            />
          ) : (
            <span>{name}</span>
          )}

          {edit ? (
            <IconSVG src={Saved} handleClickIcon={saveEdition} className={styles.icon} />
          ) : (
            <IconSVG
              src={Pencil}
              className={styles.icon} 
              handleClickIcon={() => {
                editItem(cardCurrent);
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
                value={stateCard.dateBirth}
                className={styles.input}
              />
            ) : (
              <span className={styles.simpleTextInput}>{dateBirth}</span>
            )}
          </div>
        )}

        <div className={edit ? styles.itemEdit : styles.itemInfoText}>
          <>
            <span>
              <strong>Биография: </strong>
            </span>
          </>
          {edit ? (
            <textarea
              name="description"
              value={stateCard.description}
              className={styles.text}
              onChange={handleChange}
            />
          ) : (
            <span className={styles.simpleText}>{description}</span>
          )}
        </div>
        <div className={styles.itemInfo}>
          <span>
            <strong>Автор: </strong>
          </span>
          <span>
            {userName.name} 
          </span>
          <IconSVG
            src={Email}
            className={styles.emailIcon}
            handleClickIcon={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

CardView.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cardCurrent: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  isPublish: PropTypes.bool.isRequired,
  markAsPublish: PropTypes.func.isRequired,
  dateBirth: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
