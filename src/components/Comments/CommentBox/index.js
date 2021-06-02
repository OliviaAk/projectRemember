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
  const [selectedFile, setSelectedFile] = useState();

  const dispatch = useDispatch();
  const { quizes, questions } = useSelector((state) => state.quiz);

  const textRef = useRef(null);
  const containerRef = useRef(null);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue('');
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    const commentDta = {
      comment: commentValue,
      date: new Date(),
    };
    dispatch(createComment(commentDta));
    onClose();
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
          defaultValue="Добавьте ссылку на видео или другие ресурсы"
          className={styles.inputLink}
        />
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

        <div className={styles.actions}>
          <button type="button" className={styles.cancel} onClick={onClose}>
            Отмена
          </button>
          <button
            type="submit"
            className={styles.submit}
            disabled={commentValue.length < 1}
            onClick={onSubmit}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
