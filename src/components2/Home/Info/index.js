import React from 'react'
import styles from './styles.module.css'
import IconSVG from '../../../components/shared/Icons'
import Video from '../../../assets/images/download.png'
import {Slide} from '../../shared/Slide'
import Button from '../../../components/shared/Button'
import Pic from '../../../assets/images/pic3.jpg'

export default function Info() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [
        {
          id: 1,
          title: "Узнайте об истории обороны Могилева!",
        },
        {
          id: 2,
          title: "О героях войны 1941-1945 годов и их подвигах!",
        },
        {
          id: 3,
          title: "Сохраните воспоминания о родных — участниках обороны Могилева, чтобы память о них жила вечно!",
        },
      ];
      React.useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((prev) => {
            return prev + 1 === slides.length ? 0 : prev + 1;
          });
        }, 4000);
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    return (
     <div className={styles.home}>
            <div className={styles.homeOverlay}>
        <div className={styles.homeContainer}>
         <div className={styles.homeMain}>
             <p className={styles.homeMainTitle}>Виртуальная стена памяти города Могилева</p>
             <div className={styles.homeCarusel}>
             <Slide image={slides[currentSlide]}/>          
               </div>
         <div className={styles.social}>
         </div>
         <Button className={styles.readBtn} >Архив</Button>
         </div>

         
            </div>
        </div>
        </div>
    )
}
