import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './styles.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getHistory, getHistoryByDate } from "../../../store/thunks";
import Age from '../../../assets/images/age.png'
import Days from '../../../assets/images/days.png'

export default function History() {
    const dispatch = useDispatch();

    const { histories} = useSelector((state) => state.dashboardHero);

    useEffect(()=>{
        dispatch(getHistory());
    },[dispatch])

    const openDay = (id)=>{
        dispatch(getHistoryByDate(id))
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
                     histories.map((history)=>{
                         return(
                             <Link to='/day' className={styles.historyDate} onClick={()=>openDay({id:history._id})}>
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
