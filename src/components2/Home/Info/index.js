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
        <div className={styles.homeContainer}>
         <div className={styles.homeMain}>
             <p className={styles.homeMainTitle}>Виртуальная стена памяти города Могилева</p>
             <div className={styles.homeCarusel}>
             <Slide image={slides[currentSlide]}/>          
               </div>
             <p className={styles.textAfter}>This line is fixed so you can write anything</p>
         <div className={styles.social}>
         </div>
         <Button className={styles.readBtn} buttonColor='btn-custom'>Архив</Button>
         </div>

         <div className={styles.homeTop}>

            <div className={styles.fullText}>
                <h3>Никто не забыт, ничто не забыто!</h3>
                    <p className={styles.text}>
                Виртуальная стена памяти обороны Могилева представлена по случаю славной и памятной даты в исто­рии Отечества — 80-й
                годовщины начала обороны Могилева от немецко-фашистских захватчиков.
            23 дня героического противостояния врагу на Днепровском рубеже вошли легендарной страницей 
            в летопись Великой Отечественной войны. Битва за Могилев вселила в сердца миллионов людей надежду и веру 
            в неотвратимый разгром оккупантов. А Буйничское поле стало таким же символом мужества и стойкости. 
            Подвиг защитников Могилева всегда будет жить в сердцах белорусов.
            Гордитесь родным Могилевом - городом белорусской ратной славы, неустанно трудитесь ради его счастья и процветания!
                            </p>
            </div>
            <div className={styles.video}>
                <IconSVG className={styles.videoIcon} src={Pic}/>
            </div>
        </div>
            

        </div>
        </div>
    )
}
