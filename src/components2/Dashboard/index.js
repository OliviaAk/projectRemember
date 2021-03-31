import React from 'react'
import styles from './styles.module.css'
import IconSVG from '../../components/shared/Icons'
import Port from '../../assets/heroes/i1.jpeg';
import {dashboardInfo} from '../../mocks/dashboard'


export default function Dashboard() {
    return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardContent}>
            {dashboardInfo.map((item,index)=>{
                            return(
            <div className={styles.dashboardItem}>
                  <div className={styles.portrait}>
                      <IconSVG className={styles.portraitIcon} src={item.img}/>
                  </div>
                  <div className={styles.text}>
                      <h4>{item.lastName} {item.name}</h4>
                      <p>{item.date}</p>
                  </div>
              </div>
                            )
                        })}

           


              
            </div>
        </div>
    </div>
    )
}
