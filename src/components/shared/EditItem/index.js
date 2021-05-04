import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import styles from './styles.module.css';

export default function EditItem({
  item,
  image,
  name,
  user,
  description,
  markAsFavorite,
  dateBirth,
  url,
  text,
}) {
  const [userEmail, setUserEmail] = useState('');
  const { users } = useSelector((state) => state.authentication);
  const publishCard = (id) => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <Image
          key={item}
          cloudName="belarus-remember"
          publicId={image}
          width="300"
          height="350"
          crop="scale"
        />
      </div>
      <div className={styles.wrapperBlock}>
        <div className={styles.wrapperContext}>
          <span className={styles.name}>{name}</span>
          <span className={styles.dateBirth}>{dateBirth}</span>
          {url && (
            <span>
              Карта:{' '}
              <a className={styles.text} href={url}>
                {url}
              </a>
            </span>
          )}
        </div>

        <div className={styles.infoBlock}>
          <Button
            buttonColor="btn--edit"
            className={styles.openBtn}
            onClick={(e) => {
              e.stopPropagation();
              markAsFavorite();
            }}
          >
            Опубликовать
          </Button>
          <Button buttonColor="btn--edit" className={styles.openBtn}>
            Редактировать текст
          </Button>
          <Button buttonColor="btn--edit" className={styles.openBtn}>
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
}
