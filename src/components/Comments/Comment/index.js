import React from 'react';

export default function Comment() {
  return (
    <div>
      <div className="comment">
        <p className="comment-header" />
        <p className="comment-body" />
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">
            Delete Comment
          </a>
        </div>
      </div>
    </div>
  );
}
