import React,{useState, useEffect} from 'react'
import styles from './styles.module.css'
import {searchData} from '../../../mocks/heroSearch'
import Button from '../../shared/Button';
import { useSelector, useDispatch } from "react-redux";
import { getHeroes } from "../../../store/thunks";
import Portrait from '../../../assets/images/portrait.png'

export default function Dashboard() {
    const dispatch = useDispatch();
    const { heroes } = useSelector((state) => state.dashboardHero);

    useEffect(()=>{
        dispatch(getHeroes());
    },[dispatch])
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardContainer}>
                 <div className={styles.dashboardSearch}>
                     <div className={styles.searchHeader}>
                         <p>{searchData.title}</p>
                     </div>
                     <div className={styles.searchInfo}>
                         <p>{searchData.text}  </p>
                     </div>
                        <form className={styles.searchForm}>
                            <input className={styles.searchInput}/>    
                            <Button buttonSize='primary-btn3' > Поиск</Button>                        
                        </form>

                    </div>
                <div className={styles.dashboardContent}>
                    <div className={styles.dashboardContentHeader}>ДОСКА!</div>
                    <div className={styles.dashboardItems}>
                        {heroes.map((item,index)=>{
                            return(
                                <div key={index} className={styles.dashboardItem}>
                                <div className={styles.itemImage}>
                                    <img src={Portrait} alt=''/>
                                </div>
                                <div className={styles.itemInfo}>
                                    <div className={styles.itemMainInfo}>
                                    <p className={styles.itemName}>{item.firstName} {item.secondName} {item.thirdName}</p>
                                    <p className={styles.itemYears}>{item.dateBirth}</p>
                                    <p>{item.text}</p>
                                    </div>
                                    <Button buttonSize='primary-btn3' >Подробнее</Button>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                   
                    
                    
                </div>
            </div>
        </div>
    )
}
