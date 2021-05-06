import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Upload } from 'assets/icons';
import { IconSVG, Selector, Spinner, Modal } from 'components/shared';
import { getHeroes, createHero } from 'store/thunks';
import Person from 'assets/images/person1.png';
import styles from './styles.module.css';

const options = [
  { value: true, label: 'Опубликовать на сайте' },
  { value: false, label: 'Добавить в хранилище' },
];
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
  const [isLoad, setLoad] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const [isPublish, setStatus] = useState(false);
  const dispatch = useDispatch();
  const { heroes, loadingHero, hero } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (!loadingHero && hero !== null) {
      setOpenModal(true);
    }
  }, [loadingHero, hero]);

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
    setLoad(true);
  };

  useEffect(() => {
    if (image !== null) {
      setData({ name, dateBirth, text, image, url, isPublish });
      setSend(true);
    }
  }, [image]);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        dispatch(createHero(newHero));
        setSend(false);
        setLoad(false);
        setFileInputState('');
        setPreviewSource('');
        setImage(null);
        setName('');
        setDate('');
        setText('');
        setUrl('');
      }, 500);
    }
  }, [isSend]);

  return (
    <div className={styles.wrapper}>
      {(loadingHero || isLoad) && <Spinner loading={loadingHero} />}
      <form onSubmit={handleSubmitFile} className={styles.wrapperContainer}>
        <div className={styles.wrapperImage}>
          <label className={styles.customUpload}>
            <input
              id="fileInput"
              type="file"
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
              className={styles.imgInput}
            />
            {previewSource ? (
              <IconSVG className={styles.photo} src={previewSource} alt="chosen" />
            ) : (
              <IconSVG className={styles.photo} src={Person} />
            )}
          </label>
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
          <Selector
            options={options}
            value={options.find((el) => el.value === isPublish)}
            onChange={({ value }) => {
              setStatus(value);
            }}
          />

          <div className={styles.sendBtn}>
            <button type="submit" className={styles.submit}>
              Добавить
            </button>
          </div>
        </div>
      </form>
      <Modal
        show={isOpenModal}
        closeModal={() => setOpenModal(false)}
        text={`Герой успешно добавлен в базу.  ${
          isPublish
            ? 'Также опубликован на сайте в разделе "Доска памяти".'
            : 'Еще не опубликован, в разделе "Редактирование доски" можно опубликовать!'
        } `}
      />
    </div>
  );
}
