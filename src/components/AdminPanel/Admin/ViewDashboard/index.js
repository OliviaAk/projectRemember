import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconSVG,
  Selector,
  Spinner,
  Modal,
  EditableText,
  TextField,
} from 'components/shared';
import { getHeroes } from 'store/thunks';
import { Image } from 'cloudinary-react';
import styles from './styles.module.css';

export default function ViewDashboard() {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState('');

  const dispatch = useDispatch();
  const { heroes } = useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(getHeroes());
  }, []);
  console.log(data);

  const saveEdition = () => {
    setEdit(false);
  };
  const editItem = () => {
    setEdit(true);
  };
  return (
    <div className={styles.wrapper}>
      {heroes.map((hero) => (
        <div className={styles.wrapperItem}>
          <Image
            cloudName="belarus-remember"
            publicId={hero.image}
            width="230"
            height="270"
            crop="scale"
          />
          <div className={styles.wrapperContent}>
            {/* <input type="text" value={hero.name} className={styles.input} />
            {hero.dateBirth && (
              <input type="text" value={hero.dateBirth} className={styles.input} />
            )} */}
            {edit ? (
              <button type="button" onClick={saveEdition}>
                Done
              </button>
            ) : (
              <button type="button" onClick={editItem}>
                Edit
              </button>
            )}
            {edit ? (
              <EditableText value={hero.name} handleInput={setData} />
            ) : (
              <TextField text={hero.name} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
