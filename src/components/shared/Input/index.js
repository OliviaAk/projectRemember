import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import  IconSVG  from "../Icons";

const Input = ({
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
  maxLength,
  minLength,
  pattern,
  isIcon,
  isPassword,
  passwordIcon,
  handleClickIcon,
}) => {
  const methods = useFormContext();
  const { register, errors } = methods;

  return (
    <div className={styles.item}>
      <div className={styles.inputContainer}>
        {isIcon ? <IconSVG className={styles.inputIcon} src={icon} /> : ""}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          ref={register({
            required: { value: true, message: "Поле обязательно для заполнения" },
            maxLength: maxLength,
            minLength: minLength,
            pattern: pattern,
          })}
          onChange={onChange}
        />
        {isPassword ? (
          <IconSVG
            className={styles.inputIcon}
            src={passwordIcon}
            handleClickIcon={handleClickIcon}
          />
        ) : (
          ""
        )}
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className={styles.inputErrors}>{message}</p>}
      />
    </div>
  );
};
export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["text", "number", "password"]),
  value: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  passwordIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  errorText: PropTypes.string,
  maxLength: PropTypes.object,
  minLength: PropTypes.object,
  pattern: PropTypes.object,
  isIcon: PropTypes.bool,
  isPassword: PropTypes.bool,
  handleClickIcon: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  className: "",
};
