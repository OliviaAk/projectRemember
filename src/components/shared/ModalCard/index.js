import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';
import ShareButtons from '../Share/sharebuttons.component';
import { Close } from '../../../assets/icons';
import { IconSVG } from '../index';
import { LinksShares } from '../../../mocks/shares';

const ModalCard = ({}) => {
  const history = useHistory();
  const closeModal = () => {
    history.push('/');
  };
  const { userCard } = useSelector((state) => state.dashboardHero);

  return (
    <div className={` ${styles.modal} ${styles.modalActive}`}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>
          <ShareButtons
            title={LinksShares.title}
            url={LinksShares.url}
            className={styles.itemShared}
          />
          <IconSVG
            className={styles.icon}
            handleClickIcon={() => closeModal()}
            src={Close}
          />
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalText}>
            <div className={styles.imageText}>
              <p>{userCard.firstName}</p>
              <p>{userCard.dateBirth}</p>
            </div>
          </div>

          <div className={styles.image}>
            <p className={styles.imgText}>{userCard.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalCard;
ModalCard.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  item: PropTypes.object,
  locations: PropTypes.array,
};
ModalCard.defaultProps = {
  handleClose: () => null,
  show: false,
  item: 0,
};
