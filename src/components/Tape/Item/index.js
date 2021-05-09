import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../../shared';
import styles from './styles.module.css';

export default function Item({ item, image, name, user, btn }) {
  const [userEmail, setUserEmail] = useState({});
  const { users } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (users.length > 0) {
      users.map((i) => {
        if (i._id === user) {
          setUserEmail({firstName: i.firstName, lastName: i.lastName});
        }
      });
    }
  }, [user, users]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
      <Image
        key={item}
        cloudName="belarus-remember"
        publicId={image}
        width="200"
        height="200"
        crop="scale"
      />
      </div>
      <div className={styles.textContainer}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.infoBlock}>
        <span>{userEmail.firstName} {userEmail.lastName} помнит...</span>
      </div>
      </div>
    </div>
  );
}
Item.propTypes = {
  item: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};
