import React, {useState, useEffect} from 'react'
import { Image } from 'cloudinary-react';
import {useSelector, useDispatch} from 'react-redux'
import Button from '../../../components/shared/Button'
import styles from './styles.module.css'

export default function EditItem({item, image, name, user,description, markAsFavorite}) {

    const [userEmail, setUserEmail] = useState('');
    const { users } = useSelector((state) => state.authentication);
    const publishCard = (id)=>{

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContent}>
            <Image
                key={item}
                cloudName='belarus-remember'
                publicId={image}
                width="300"
                height='350'
                crop="scale"
             />
             <span className={styles.name}>{name}</span> 
             <div className={styles.infoBlock}>
                 <Button buttonColor='btn--tape' className={styles.openBtn}  onClick={(e) => {
              e.stopPropagation();
              markAsFavorite();
            }}>Опубликовать</Button>
                 <Button buttonColor='btn--tape' className={styles.openBtn}>Удалить</Button>

            </div>
            </div>   
            <div className={styles.wrapperDescription}>
                {description}
            </div>
        </div>
    )
}
