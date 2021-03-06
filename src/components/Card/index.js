import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconSVG from '../shared/Icons';
import styles from './styles.module.css';
import Example from '../../assets/images/defaultCard.png';
import { Upload } from '../../assets/icons';
import { Button, PopUp, Spinner } from '../shared';
import { createCard } from '../../store/thunks';

export default function Card() {
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [name, setName] = useState('');
  const [dateBirth, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [newCard, setData] = useState({});
  const [isSend, setSend] = useState(false);
  const dispatch = useDispatch();
  const [noUser, setNoUser] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const { isLoading } = useSelector((state) => state.cardsTape);
  const [showPopSuccess, setIsShowPop] = useState(false);

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
      setData({ name, dateBirth, description, image });
      setSend(true);
    }
  }, [image]);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        dispatch(createCard(newCard));
        setSend(false);
        setName('');
        setDate('');
        setFileInputState('');
        setPreviewSource('');
        setDescription('');
        setIsShowPop(true);
      }, 500);
    }
  }, [isSend]);
  return (
    <>
      <div className={styles.card}>
        {isLoading && <Spinner loading={isLoading} />}
        <form onSubmit={handleSubmitFile} className={styles.cardContainer}>
          <div className={styles.wrapperImage}>
            {previewSource ? (
              <IconSVG className={styles.photo} src={previewSource} alt="chosen" />
            ) : (
              <IconSVG className={styles.photo} src={Example} />
            )}
            <>
              <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
                className={styles.imgInput}
              />
            </>
          </div>
          <div className={styles.textContainer}>
            <input
              placeholder="??????????????,??????,???????????????? ??????????"
              type="text"
              name="name"
              value={name}
              className={styles.inputItem}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="???????? ??????????"
              type="text"
              name="dateBirth"
              value={dateBirth}
              className={styles.inputItem}
              onChange={(e) => setDate(e.target.value)}
            />
            <textarea
              placeholder="?????????????? ??????????????????"
              name="description"
              value={description}
              className={styles.text}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className={styles.sendBtn}>
              <Button buttonColor="btn--card" type="submit">
                ??????????????????
              </Button>
            </div>
          </div>
        </form>
      </div>
      <PopUp
        show={noUser}
        closeModal={() => setNoUser(false)}
        isClose
      >
                <div className={styles.noUserPopUp}>???????????????????? ?????????????? ????????????????, ???????????????????? ??????????????????????????!</div>

        </PopUp>

      <PopUp show={showPopSuccess} closeModal={() => setIsShowPop(false)} isClose>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '30px 20px' }}>
          <p>?????????????? ????????????????????!</p>
          <p> ?????????? ?????????????????? ????????????????????????????, ???????? ???????????????? ???????????????? ???? ??????????.</p>
        </div>
      </PopUp>
    </>
  );
}
