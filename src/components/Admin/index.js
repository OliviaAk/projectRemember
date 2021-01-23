import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getHeroes} from '../../store/thunks'
import styles from './styles.module.css'
import Button from '../shared/Button'
export default function Admin() {
    const dispatch = useDispatch()
    const {heroes} = useSelector((state) => state.dashboardHero);
    useEffect(()=>{
        dispatch(getHeroes())
    },[dispatch])

    return (
        <div>
            <div className={styles.dashboard}>
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardContent}>
                    <h1>НОВЫЕ ГЕРОИ</h1>
                    <div className={styles.dashboardItems}>
                        {heroes.map((i, index)=>{
                            return(
                                <div className={styles.content}>
                                <div className={styles.item} key={index}>
                                    <div className={styles.border}>
                                    <p className={styles.cred}>ФИО:</p>
                                    <p className={styles.name}>{i.firstName}  {i.thirdName}</p>


                                 </div>
                                    <div className={styles.border}>
                                    <p className={styles.cred}>Годы жизни:</p>
                                    <p className={styles.name}> {i.dateBirth}</p>


                                 </div>
                                    <div className={styles.border}>
                                    <p className={styles.cred}>Описание:</p>
                                    <p className={styles.name}> {i.text}</p>

                                 </div>
                                 <div className={styles.border}>
                                    <p className={styles.cred}>Добавил:</p>
                                    <p className={styles.name}> olivia.akhmaeva@gmail.com</p>

                                 </div>
                                
                                </div>
                                <Button buttonSize='btn-pub'>Опубликовать</Button>
                                </div>
                            )
                        })}
                       
                    </div>
                </div>
            </div>
        </div>            
        </div>
    )
}
