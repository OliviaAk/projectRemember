import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { IconSVG } from 'components/shared';
import {Pencil, Saved } from 'assets/icons';
import styles from './styles.module.css';

export default function ViewItem({image, name, dateBirth, text, url, isPublish,  heroCurrent}) {
    const [edit, setEdit] = useState(false);
    const [state, setState] = useState({});

    const saveEdition = () => {
        setEdit(false);
      };

      const editItem = (hero) => {
        setState(hero)
        setEdit(true);

    
      };
      const handleChange = (e) => {
        setState({
          [e.target.name]: e.target.value
        });
      };
      console.log(state, 'data')
    return (
        <div className={styles.wrapperItem}>
        <div className={styles.imageContainer}>
            <Image
            cloudName="belarus-remember"
            publicId={image}
            width="230"
            height="270"
            crop="scale"
          />
         
            <button type="submit" className={styles.submit}>
              Опубликовать
            </button>
            <button type="submit" className={styles.submit}>
              Удалить с базы
            </button>
        </div>
          <div className={styles.wrapperContent}>
              <div className={styles.itemInfo}>
              {edit ? <input name='name' type='text' onChange={handleChange} value={state.name}/>:
              <span>{name}</span>
            }

            {edit ? (
              <IconSVG src={Saved} handleClickIcon={saveEdition}/>
            ) : (
              <IconSVG src={Pencil} handleClickIcon={()=>{editItem(heroCurrent)}}/>
            )}
            </div>
            <div className={styles.itemInfo}>
            {edit ? <input name='dateBirth' type='text' onChange={handleChange} value={state.dateBirth}/>:
              <span>{dateBirth}</span>
            }
            </div>
            <div className={styles.itemInfo}>
                <span><strong>Сведения: </strong></span>
              <span>{text}</span>
            </div>
            </div>
        </div>
    )
}


ViewItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dateBirth: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

    heroCurrent: PropTypes.object.isRequired,
    isPublish: PropTypes.bool.isRequired,


  };