import React, { useState, useRef, useEffect } from 'react';
import { UserIcon } from 'assets/icons';
import styles from './styles.module.css';

const INITIAL_HEIGHT = 46;
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

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, commentValue);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue('');
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('send the form data somewhere');
  };

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={`${styles.commentBox}
            ${isExpanded ? styles.expanded : null}
            ${!isExpanded ? styles.collapsed : null}
            ${commentValue.length > 0 ? styles.modified : null}

        
        `}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
        }}
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
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className={styles.commentField}
          placeholder="Расскажите новости"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className={styles.actions}>
          <button type="button" className={styles.cancel} onClick={onClose}>
            Отмена
          </button>
          <button type="submit" disabled={commentValue.length < 1}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
