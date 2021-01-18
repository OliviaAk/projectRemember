import React from 'react'
import { Link } from "react-router-dom";
import IconSVG from '../../shared/Icons'
import MyCarousel from '../../shared/Slider'
import image from '../../../assets/images/aner.jpg'
import styles from './styles.module.css'
import {mainData} from '../../../mocks/mainData'
import {mainLinks} from '../../../mocks/mainLinks'
import Facebook from '../../../assets/icons/facebook-brands.svg'
import Vk from '../../../assets/icons/vk-brands.svg'
import Google from '../../../assets/icons/google-brands.svg'


export default function Home() {
      const handleFacebookSignin = ()=>{
          window.open(`http://localhost:5000/auth/facebook`,"_self")
      }
    return (
        <div className={styles.home}>
          <div className={styles.navContainer}>
           <div className={styles.homeLogo}>К 80летию обороны Могилева посвящяется.....</div>
            <div className={styles.navbarButtons}>
                <IconSVG handleClickIcon={handleFacebookSignin} src={Facebook} className={styles.gitIcon}/>
                <IconSVG  src={Vk} className={styles.gitIcon}/>
                <IconSVG  src={Google} className={styles.gitIcon}/>
             </div>
           </div>

         <div className={styles.homeContainer}>          
                <div className={styles.homeContent}>
                    <div className={styles.carousel}>
                    <MyCarousel/>


                    </div>

                
                <div className={styles.mainContent}>
                        <div className={styles.headerContent}>
                            <p>Виртуальная стена памяти героев обороны Могилева</p>

                        </div>
                        
                        <div className={styles.mainDashboard}>
                            {mainLinks.map((item,index)=>{
                                return(
                                    <div key={index} className={styles.mainItem}>
                                        <Link to={item.link} className={styles.mainLinks}>
                                            <div>{item.name}</div>
                                        </Link>
                                        <div >
                                            <img src={item.image} alt=''/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.mainInfo}>
                            <p>{mainData.title}</p>
                            <p className={styles.mainText}>{mainData.text}</p>
                        </div>

                    </div>
                </div>
          </div>
     </div>
    )
}
