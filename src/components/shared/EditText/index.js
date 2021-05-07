import React, { useState } from 'react';

export default function EditText({ chore, onChange, onClick, isEditing, setIsEditing }) {
  const handleClick = () => {
    setIsEditing();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing();
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          autoFocus
          value={chore}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          type="text"
          style={{ width: '400px' }}
        />
      ) : (
        <span onClick={handleClick}>{chore}</span>
      )}
    </>
  );
}
