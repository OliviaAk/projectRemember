import React, { useState, useRef, useEffect } from 'react';
import { UserIcon, Upload } from 'assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from 'store/thunks';
import styles from './styles.module.css';
import { Button, PopUp, Spinner } from 'components/shared';
import IconSVG from '../../shared/Icons';


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
  const [link, setLink] = useState('');
  const [noUser, setNoUser] = useState(false);

  const textRef = useRef(null);
  const containerRef = useRef(null);
  const { user , isAuthenticated} = useSelector((state) => state.authentication);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleFileInputChange = (e) => {
    if (user ===  null) {
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
      setData({ comment: commentValue, date: new Date(), image, link , userId:user._id});
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
        setLink('');
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
            {user &&
            <span>{user.name}</span>
            }
          </div>
        </div>
        <textarea
          ref={textRef}
          onChange={onChange}
          className={styles.commentField}
          placeholder="???????????????????? ??????????????"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className={styles.cont}>
          <div className={styles.inputlink}>
            <input
              placeholder="???????????? ???? ???????????? ??????????????"
              value={link}
              onChange={linkOnChange}
              className={styles.formLink}
            />
          </div>
        </div>
        <div className={styles.cont}>
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
          {previewSource && (
            <IconSVG className={styles.photo} src={previewSource} alt="chosen" />
          )}
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.cancel} onClick={onClose}>
            ????????????
          </button>
          <button
            type="submit"
            className={styles.submit}
            disabled={commentValue.length < 1}
            onClick={handleSubmitFile}
          >
            ??????????????????
          </button>
        </div>
      </form>
      <PopUp
        show={noUser}
        closeModal={() => setNoUser(false)}
        isClose
      >
                <div className={styles.noUserPopUp}>???????????????????? ?????????????? ????????????????, ???????????????????? ??????????????????????????!</div>
                </PopUp>

    </div>
  );
}
