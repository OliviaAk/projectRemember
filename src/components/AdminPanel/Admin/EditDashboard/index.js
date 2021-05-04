import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { EditItem, Button, IconSVG } from '../../../shared';
import { getHeroes, createHero } from '../../../../store/thunks';
import Person from '../../../../assets/images/person.png';
import { Upload } from '../../../../assets/icons';

export default function EditDashboard() {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [name, setName] = useState('');
  const [dateBirth, setDate] = useState('');
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState(null);
  const [newHero, setData] = useState({});
  const [isSend, setSend] = useState(false);
  const dispatch = useDispatch();
  const { heroes } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getHeroes());
  }, []);
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };
  const uploadImage = async (base64EncodedImage) => {
    try {
      fetch(`${process.env.REACT_APP_API_URI}/dashboard/`, {
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
    } catch (err) {
      console.log(err);
    }
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
      setData({ name, dateBirth, text, image, url });
      setSend(true);
    }
  }, [image]);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        dispatch(createHero(newHero));
        setSend(false);
      }, 3000);
    }
  }, [isSend]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Доска памяти</div>
      <span>Создать нового героя:</span>
      <form onSubmit={handleSubmitFile} className={styles.wrapperContainer}>
        <div className={styles.wrapperImage}>
          {previewSource ? (
            <IconSVG className={styles.photo} src={previewSource} alt="chosen" />
          ) : (
            <IconSVG className={styles.photo} src={Person} />
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
                <IconSVG className={styles.uploadIcon} src={Upload} />
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
          <input
            placeholder="Ссылка на карту"
            type="text"
            name="url"
            value={url}
            className={styles.inputItem}
            onChange={(e) => setUrl(e.target.value)}
          />

          <textarea
            placeholder="Краткая биография"
            name="text"
            value={text}
            className={styles.text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className={styles.sendBtn}>
            <Button buttonColor="btn--hero" type="submit">
              Добавить
            </Button>
          </div>
        </div>
      </form>

      {heroes.map((hero) => (
        <EditItem
          name={hero.name}
          image={hero.image}
          user={hero.userId}
          description={hero.description}
          dateBirth={hero.dateBirth}
          text={hero.text}
          url={hero.url}
        />
      ))}
    </div>
  );
}
