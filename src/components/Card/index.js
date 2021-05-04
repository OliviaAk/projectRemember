import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconSVG from '../shared/Icons';
import styles from './styles.module.css';
import Example from '../../assets/images/defaultCard.png';
import { Upload } from '../../assets/icons';
import { Button, PopUp } from '../shared';
import { createCard } from '../../store/thunks';

export default function Card() {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [name, setName] = useState('');
  const [dateBirth, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});
  const [isSend, setSend] = useState(false);
  const dispatch = useDispatch();
  const [noUser, setNoUser] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (!isAuthenticated) {
      setNoUser(true);
    }
  }, []);
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleFileInputChange = (e) => {
    if (!isAuthenticated) {
      setNoUser(true);
    } else {
      const file = e.target.files[0];
      previewFile(file);
      setSelectedFile(file);
      setFileInputState(e.target.value);
    }
  };
  const uploadImage = async (base64EncodedImage) => {
    try {
      fetch(`${process.env.REACT_APP_API_URI}/cards/`, {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          setImage(data.imageId);
        });
      setFileInputState('');
      setPreviewSource('');
    } catch (err) {}
  };
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
  };

  useEffect(() => {
    if (image !== null) {
      setData({ name, dateBirth, description, image });
      setSend(true);
    }
  }, [image]);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        dispatch(createCard(data));
        setSend(false);
      }, 3000);
    }
  }, [isSend]);
  return (
    <>
      <div className={styles.card}>
        <form onSubmit={handleSubmitFile} className={styles.cardContainer}>
          <div className={styles.wrapperImage}>
            {previewSource ? (
              <IconSVG className={styles.photo} src={previewSource} alt="chosen" />
            ) : (
              <IconSVG className={styles.photo} src={Example} />
            )}
            <>
              <div className={styles.formGroup}>
                <label className={styles.customUpload}>
                  <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className={styles.imgInput}
                  />
                  <IconSVG src={Upload} className={styles.uploadIcon} />
                  <span className={styles.uploadText}>Загрузить фото </span>
                </label>
              </div>
            </>
          </div>
          <div className={styles.textContainer}>
            <input
              placeholder="Фамилия,имя,отчество героя"
              type="text"
              name="name"
              value={name}
              className={styles.inputItem}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Годы жизни"
              type="text"
              name="dateBirth"
              value={dateBirth}
              className={styles.inputItem}
              onChange={(e) => setDate(e.target.value)}
            />
            <textarea
              placeholder="Краткая биография"
              name="description"
              value={description}
              className={styles.text}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className={styles.sendBtn}>
              <Button buttonColor="btn--card" type="submit">
                Отправить
              </Button>
            </div>
          </div>
        </form>
      </div>
      <PopUp
        show={noUser}
        closeModal={() => setNoUser(false)}
        title="Невозможно создать открытку, пожалуйста авторизуйтесь!"
      />
    </>
  );
}
