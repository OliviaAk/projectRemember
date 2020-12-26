import React,{useState, useEffect} from 'react'
import styles from './styles.module.css'
import Button from '../../shared/Button';
import { useSelector, useDispatch } from "react-redux";


export default function Hero() {
    const dispatch = useDispatch();
    const { heroes } = useSelector((state) => state.dashboardHero);

    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardContent}>
                    
                   
                    
                    
                </div>
            </div>
        </div>
    )
}
