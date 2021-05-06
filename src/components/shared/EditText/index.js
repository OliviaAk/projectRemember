import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function EditableText({ value, handleInput }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={() => {
          handleInput(value);
        }}
        style={{ width: '400px' }}
      />
    </div>
  );
}
EditableText.propTypes = {
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};
