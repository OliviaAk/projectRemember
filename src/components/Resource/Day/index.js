import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import styles from './styles.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getHistoryByDate } from "../../../store/thunks";
import Age from '../../../assets/images/age.png'
import Button from '../../shared/Button'

export default function Day() {
    
    const [aboutDay,setAboutDay]= useState([]) 
    const { history} = useSelector((state) => state.dashboardHero);
    const endPoint = useHistory()

    useEffect(()=>{
        if(history){
            setAboutDay(history)
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
                    {aboutDay.map((day)=>{
                        return(
                            <>
                           <p className={styles.dayDate}>{day.date}</p>
                           <p className={styles.dayText}>{day.text}</p>
                           </>
                        )
                    })}
                    </div>
                    <div className={styles.dayButton}>
                        <Button buttonSize='primary-btn3' onClick={returnToHistory}>Назад</Button>
             </div>
                
                    
                </div>
            </div>
        </div>
    )
}
