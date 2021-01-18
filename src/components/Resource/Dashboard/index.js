import React,{useState, useEffect} from 'react'
import styles from './styles.module.css'
import {searchData} from '../../../mocks/heroSearch'
import {  useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from '../../shared/Button';
import { useSelector, useDispatch } from "react-redux";
import { getHeroes, getHero, getHeroByName } from "../../../store/thunks";
import { setHero } from "../../../store/actions";
import {dashboardInfo} from '../../../mocks/dashboard'
export default function Dashboard() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        register,
        handleSubmit,
        errors,
        formState: { isSubmitSuccessful },
      } = useForm();
    const { heroes } = useSelector((state) => state.dashboardHero);

    useEffect(()=>{
        dispatch(getHeroes());
    },[dispatch])
    
    const openInfoAboutHero = (id)=>{
        dispatch(setHero(id))
        history.push("/person");
    }
    const searchCurrentHeroByName = ({name})=>{
        dispatch(getHeroByName({name}))
        history.push("/person");

    }
    const searchStreet = ()=>{
        window.open(`${dashboardInfo.url}`,"_self")
    }
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
                            <input
                         className={styles.searchInput}
                            type="text"
                            name="name"
                            ref={register({ required: true, maxLength: 20 })}
                             /> 
                            <Button buttonSize='primary-btn3' onClick={handleSubmit(searchCurrentHeroByName)}> Поиск</Button>                        
                        </form>

                    </div>
                <div className={styles.dashboardContent}>
                    <div className={styles.dashboardItems}>
                        {dashboardInfo.map((item,index)=>{
                            return(
                                <div key={index} className={styles.dashboardItem}>
                                <div className={styles.itemImage}>
                                    
                                    <img className={styles.portrait} src={item.img} alt=''/>
                                </div>
                                <div className={styles.itemInfo}>
                                    <div className={styles.itemMainInfo}>
                                    <a className={styles.itemName} href={item.url}>{item.lastName} {item.name}</a>
                                    <p className={styles.itemYears}>{item.date}</p>
                                    <p>{item.descr}</p>
                                    </div>
                                    <Button buttonSize='primary-btn3' onClick={()=>openInfoAboutHero({id:item.id})} >Подробнее</Button>
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
