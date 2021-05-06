import React from 'react';
import PropTypes from 'prop-types';

export default function TextField({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
TextField.propTypes = {
  text: PropTypes.string.isRequired,
};
