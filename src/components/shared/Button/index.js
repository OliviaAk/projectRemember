import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, buttonSize, buttonColor, type }) => (
  <button className={`btn ${buttonColor} ${buttonSize}`} onClick={onClick} type={type}>
    {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  buttonSize: PropTypes.string,
  buttonColor: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
  buttonSize: '',
};

export default Button;
