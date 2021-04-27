import React from 'react'
import styles from './styles.module.css'
import IconSVG from '../../components/shared/Icons'
import Port from '../../assets/heroes/i1.jpeg';
import {dashboardInfo} from '../../mocks/dashboard'
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHero } from "../../store2/actions";
import Button from '../../components/shared/Button';


export default function Dashboard() {
    const history = useHistory();
    const dispatch = useDispatch();

    const openInfoAboutHero = (id)=>{
        history.push("/hero");
        dispatch(setHero(id))

    }
    const openMap = (item)=>{
        window.open(item);


    }
    return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardContent}>
            {dashboardInfo.map((item,index)=>{
            return(
                    <div className={styles.dashboardItem}>
                            <IconSVG className={styles.portraitIcon} src={item.img}/>
                          <div className={styles.text}>
                            <div onClick={(e) => {
                                e.stopPropagation();
                                openMap(item.url);
                                }} className={styles.textContainer}>
                               <p>{item.lastName}</p>
                               <p>{item.name}</p>
                               <p>{item.date}</p>
                            </div>
                            <Button buttonColor='primary-btn3'  onClick={()=>openInfoAboutHero(item)}>Подробнее</Button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}
