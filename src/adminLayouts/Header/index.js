import React, { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { logout } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAdmin } from "../../store2/actions";

export default function Header({ user }) {
  const [isLogout, setIsLogout] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const onHandleLogout = () => {
    dispatch(logoutAdmin());
    history.push("/singIn");
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div
          className={styles.userBlock}
          onMouseOut={() => setIsLogout(false)}
          onMouseOver={() => setIsLogout(true)}
        >
          {isLogout ? (
            <div onClick={onHandleLogout} className={styles.userLogout}>
              <span>Выход</span>
            </div>
          ) : (
            <>
              <div className={styles.user}>
                <span>Панель редактирования</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    _id: PropTypes.string,
  }),
  handleLogout: PropTypes.func,
};
