import React from 'react'
import styles from './styles.module.css'
import IconSVG from '../../components/shared/Icons'
import Exa from '../../assets/images/ee.jpg'
import Em from '../../assets/images/em.jpg'
import Ex from '../../assets/images/ex.jpg'
import Port from '../../assets/heroes/i1.jpeg';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.header}>
                    HERO

                </div>
                <div className={styles.heroContent}>
                     <div className={styles.palette}>

                    </div> 
                    <div className={styles.heroMain}>

                    <div className={styles.imageBlock}>
                            <IconSVG src={Exa} alt="" className={styles.imgOne} />
                            <IconSVG src={Em} alt="" className={styles.imgTwo}/>
                            <IconSVG src={Ex} alt="" className={styles.imgTree}/> 
                    </div>
               </div>
            </div>  
            <div className={styles.textBlock}>
                <div>Краткие сведения </div>
                <p>The last thing we’ll do in the psql command prompt is create a table called users
                 with three fields: two VARCHAR types and an auto-incrementing PRIMARY KEY ID.   
                </p>
           </div>
          </div>
        </div>
    )
}
