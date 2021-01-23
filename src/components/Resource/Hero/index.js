import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types";
import styles from './styles.module.css'
import Button from '../../shared/Button';
import { useSelector } from "react-redux";
import Portrait from '../../../assets/images/portrait.png'
import {dashboardInfo} from '../../../mocks/dashboard'


export default function Hero() {
    const [hero,setHero]= useState({})
    const { current, currentSearch} = useSelector((state) => state.dashboardHero);

   useEffect(()=>{
       if(current){
        const d = dashboardInfo.find(currentValue => currentValue.id === current.id )
        setHero(d)
       }
   },[current])

   useEffect(()=>{
    if(currentSearch){
        setHero(currentSearch)
    }
},[currentSearch])

    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.heroMain}>
                            <div className={styles.heroHeader}>
                                <a href={hero.url} className={styles.heroUrl}>{hero.name} {hero.lastName} </a>
                                <p>{hero.date}</p>
                            </div> 
                            <div className={styles.mainHero}>
                            <div className={styles.heroTextOne}>
                                <p className={styles.heroTextLeft}>{hero.textFullOne}</p>
                                <p>{hero.textFullTwo}</p>
                                <p>{hero.textFullTree}</p>

                            </div >
                            </div>                     
                        </div>
               </div>
            </div>
        </div>
    )
}
