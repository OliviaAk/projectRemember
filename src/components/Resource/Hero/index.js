import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types";
import styles from './styles.module.css'
import Button from '../../shared/Button';
import { useSelector } from "react-redux";
import Portrait from '../../../assets/images/portrait.png'


export default function Hero() {
    const [hero,setHero]= useState([])
    const { current, currentSearch} = useSelector((state) => state.dashboardHero);

   useEffect(()=>{
       if(current){
           setHero(current)
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
                    {hero.map((item)=>{
                        return(
                            <>
                            <div className={styles.heroHeader}>
                                <p>{item.firstName} {item.secondName} {item.thirdName}</p>
                                <p>{item.dateBirth}</p>
                            </div> 
                            <div className={styles.mainHero}>
                            <div className={styles.heroTextOne}>
                                <img src={Portrait} alt=''/>
                                <p className={styles.heroTextLeft}>{item.fullTextOne}</p>
                            </div >
                            <div className={styles.heroTextTwo}>
                                
                               <p>{item.fullTextTwo}</p>
                                <p>{item.fullTextTree}</p>

                            </div>
                            </div>
                            
                            </>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}
