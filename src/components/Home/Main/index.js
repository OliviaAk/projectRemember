import React from 'react'
import { Link } from "react-router-dom";
import Button from '../../shared/Button'
import image from '../../../assets/images/aner.jpg'
import styles from './styles.module.css'
import {mainData, mainImages} from '../../../mocks/mainData'
import {mainLinks} from '../../../mocks/mainLinks'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: 'slider',
      };
    return (
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <div className={styles.homeContent}>
                   
                         <div className={styles.homeBannerContainer}>
                         <Slider {...settings}>
                    {mainImages.map((i)=>{
                        return(
                         <img src={i.url} alt="" />
                         )

                        })}
                        </Slider>
                </div>
                    

                   
                    <div className={styles.mainContent}>
                        <div className={styles.headerContent}>
                            <p>ЭЛЕКТРОННЫЙ БАНК ДОКУМЕНТОВ «БИТВА НА БУЙНИЧСКОМ ПОЛЕ 1941 г.»</p>

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
                            <p>{mainData.text}</p>
                        </div>

                    </div>
                </div>
          </div>
     </div>
    )
}
