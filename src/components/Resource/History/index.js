import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './styles.module.css'
import {  useDispatch } from "react-redux";
import { getHistory } from "../../../store/thunks";
import {setDay} from '../../../store/actions'
import Age from '../../../assets/images/age.png'
import Days from '../../../assets/images/days.png'
import {historyDay} from '../../../mocks/history'

export default function History() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getHistory());
    },[dispatch])

    const openDay = (date)=>{
        dispatch(setDay(date))
    }


    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                 <div className={styles.historyImage}>
                    <img src={Days} alt=''/>
                    <img src={Age} alt=''/>
                 </div>
                 <div className={styles.historiesInfo} >
                 {
                     historyDay.map((history)=>{
                         return(
                             <Link to='/day' className={styles.historyDate} onClick={()=>openDay({id:history.id})}>
                                            <div>{history.date}</div>
                            </Link>
                         )
                     })
                 }
                   </div>

                    
                </div>
            </div>
        </div>
    )
}
