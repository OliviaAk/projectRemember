import React, { useState, useRef, useEffect } from 'react';
import { UserIcon, Upload } from 'assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from 'store/thunks';
import styles from './styles.module.css';
import IconSVG from '../../shared/Icons';

/* eslint no-param-reassign: ["error", { "props": false }] */

const useDynamicHeightField = (element, value) => {
  useEffect(() => {
    if (!element) return;
    element.current.style.height = 'auto';
    element.current.style.height = `${element.current.scrollHeight}px`;
  }, [element, value]);
};

export default function CommentBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(null);
  const [newCard, setData] = useState({});
  const [isSend, setSend] = useState(false);
  const dispatch = useDispatch();
  const [link, setLink]= useState('')
  const { quizes, questions } = useSelector((state) => state.quiz);

  const textRef = useRef(null);
  const containerRef = useRef(null);

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
      fetch(`${process.env.REACT_APP_API_URI}/comment/images`, {
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
      setData({ comment: commentValue, date: new Date(), image, link });
      setSend(true);
    }
  }, [image]);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        dispatch(createComment(newCard));
        setSend(false);
        setFileInputState('');
        setPreviewSource('');
        setCommentValue('');
      }, 1000);
    }
  }, [isSend]);

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };
  const linkOnChange = (e) => {
    setLink(e.target.value);
  };

  const onClose = () => {
    setCommentValue('');
    setIsExpanded(false);
  };

  return (
    <div className="container">
      <form
        ref={containerRef}
        className={`${styles.commentBox}
            ${isExpanded ? styles.expanded : null}
            ${!isExpanded ? styles.collapsed : null}
            ${commentValue.length > 0 ? styles.modified : null}
        `}
      >
        <div className={styles.header}>
          <div className={styles.user}>
            <img src={UserIcon} alt="" />
            <span>Ahmaeva Oliv</span>
          </div>
        </div>
        <label htmlFor={styles.comment}>What are your thoughts?</label>
        <textarea
          ref={textRef}
          onChange={onChange}
          className={styles.commentField}
          placeholder="Расскажите новости"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <input
          name="link"
          type="text"
          placeholder="Добавьте ссылку на видео или другие ресурсы"
          className={styles.inputLink}
          value={link}
          onChange={linkOnChange}
        />
        <>
          <div className={styles.formGroup}>
              <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
                className={styles.imgInput}
              />
          </div>
          {previewSource && <IconSVG className={styles.photo} src={previewSource} alt="chosen" />}
        </>

        <div className={styles.actions}>
          <button type="button" className={styles.cancel} onClick={onClose}>
            Отмена
          </button>
          <button
            type="submit"
            className={styles.submit}
            disabled={commentValue.length < 1}
            onClick={handleSubmitFile}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
