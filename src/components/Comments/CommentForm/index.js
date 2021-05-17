import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function CommentForm() {
  return (
    <form className={styles.commentForm}>
      <div className={styles.commentFields}>
        <input placeholder="userName" required />
        <br />
        <textarea placeholder="Comment" rows="4" required />
      </div>
      <div className="comment-form-actions">
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
}
