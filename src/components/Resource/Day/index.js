import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import styles from './styles.module.css'
import { useSelector } from "react-redux";
import Age from '../../../assets/images/age.png'
import Button from '../../shared/Button'
import {historyDay} from '../../../mocks/history'

export default function Day() {
    
    const [aboutDay,setAboutDay]= useState({}) 
    const { history} = useSelector((state) => state.dashboardHero);
    const endPoint = useHistory()

    useEffect(()=>{
        if(history){
         const d = historyDay.find(currentValue => currentValue.id === history.id )
         setAboutDay(d)
        
        }
    },[history])

    const returnToHistory = ()=>{
        endPoint.push('/resources')
    }
   
    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.dayImg}>
                    <img src={Age} alt=''/>
                    </div>
                    <div className={styles.dayInfo}>
                           <p className={styles.dayDate}>{aboutDay.date}</p>
                    </div>
                    <div className={styles.dayMain}>
                    <img className={styles.dayImg} src={aboutDay.img1} alt=''/>

                        <p>{aboutDay.textOne}</p>
                        <p>{aboutDay.textTwo}</p>
                        <p>{aboutDay.textTree}</p>
                    </div>
                    <div className={styles.dayQuotes}>
                     <div className={styles.dayQuote}>
                        <img className={styles.dayImg} src={aboutDay.img2} alt=''/>
                        <p className={styles.memory}>{aboutDay.memory1}</p>
                        <p className={styles.memoryText}>{aboutDay.quotes1}</p>
                      </div>
                      <div className={styles.dayQuote}>
                        <img className={styles.dayImg} src={aboutDay.img3} alt=''/>
                        <p className={styles.memory}>{aboutDay.memory2}</p>
                        <p className={styles.memoryText}>{aboutDay.quotes2}</p>
                      </div>
                      <div className={styles.dayQuote}>
                        <p className={styles.memory}>{aboutDay.memory3}</p>
                        <p className={styles.memoryText}>{aboutDay.quotes3}</p>
                      </div>
                      <div className={styles.dayQuote}>
                        <p className={styles.memory}>{aboutDay.memory4}</p>
                        <p className={styles.memoryText}>{aboutDay.quotes4}</p>
                      </div>
                
                    </div>
                    <div className={styles.dayButton}>
                        <Button buttonSize='primary-btn3' onClick={returnToHistory}>Назад</Button>
             </div>
                
                    
                </div>
            </div>
        </div>
    )
}
