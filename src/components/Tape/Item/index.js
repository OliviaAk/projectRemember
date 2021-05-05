import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../../shared';
import styles from './styles.module.css';

export default function Item({ item, image, name, user, btn }) {
  const [userEmail, setUserEmail] = useState('');
  const { users } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (users.length > 0) {
      users.map((i) => {
        if (i._id === user) {
          setUserEmail(i.email);
        }
      });
    }
  }, [user, users]);

  return (
    <div className={styles.wrapper}>
      <Image
        key={item}
        cloudName="belarus-remember"
        publicId={image}
        width="300"
        height="350"
        crop="scale"
      />
      <span className={styles.name}>{name}</span>
      <div className={styles.infoBlock}>
        <span>Автор:{userEmail}</span>
        <Button buttonColor="btn--tape" className={styles.openBtn}>
          {btn}
        </Button>
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
