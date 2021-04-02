import React from 'react'
import styles from './styles.module.css'
import IconSVG from '../../components/shared/Icons'
import Exa from '../../assets/images/ee.jpg'
import Em from '../../assets/images/em.jpg'
import Ex from '../../assets/images/ex.jpg'
import Port from '../../assets/heroes/i1.jpeg';
import { useSelector } from "react-redux";

export default function Hero() {
    const { hero} = useSelector((state) => state.reducer);
    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.header}>
                   <p>{hero.name} {hero.lastName}</p> 
                   <p>{hero.date}</p> 
                </div>
                <div className={styles.heroContent}>
                     <div className={styles.palette}>

                    </div> 
                    <div className={styles.heroMain}>

                    <div className={styles.imageBlock}>
                            <IconSVG src={Exa} alt="" className={styles.imgOne} />
                            <IconSVG src={hero.img} alt="" className={styles.imgTwo}/>
                            <IconSVG src={Ex} alt="" className={styles.imgTree}/> 
                    </div>
               </div>
            </div>  
            <div className={styles.textBlock}>
                <div>Краткие сведения </div>
                <p>{hero.textFullOne} </p>
                <p>{hero.textFullTwo} </p>
                <p>{hero.textFullTree} </p>

           </div>
          </div>
        </div>
    )
}
