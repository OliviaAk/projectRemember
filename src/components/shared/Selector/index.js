import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { customStyles, customTheme } from './customStyles';

function Selector({ options, onChange, value, placeholder, width }) {
  return (
    <div className={styles.select} style={{ width }}>
      <Select
        styles={customStyles}
        theme={customTheme}
        options={options}
        value={value}
        onChange={onChange}
        isSearchable={false}
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
}
export default Selector;

Selector.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
};
Selector.defaultProps = {
  options: [],
  value: {},
  width: '250px',
  placeholder: '',
};
