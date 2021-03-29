import React from 'react'
import Slider from '../Slider'
import Items from './Items'
import {images} from '../../mocks/images'
import styles from './styles.module.css'
import IconSVG from '../../components/shared/Icons'
import Video from '../../assets/images/download.png'
import Arrow from '../../assets/images/arrow.png'
import Start from '../../assets/images/photo.png'
import Update from '../../assets/images/update.png'
import End from '../../assets/images/star.png'
export default function Home() {
    return (
        <div className={styles.home}>
            <Slider images={images}/>
            <div className={styles.homeContainer}>
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
            <a
              data-video="http://youtu.be/G8yIlEiLNac"
              href="#0"
              aria-controls="video-modal"
            >
                
                <IconSVG  className={styles.videoIcon} src={Video} />
            </a>
            </div>
            </div>
            <Items/>
            <div className={styles.homeInfo} >
            <div className={styles.createContent}>
              <p>СОЗДАЙТЕ ОТКРЫТКУ ГЕРОЯ ОБОРОНЫ МОГИЛЕВА</p>
            </div>
                        <div className={styles.createInfo}>
                            <div className={styles.createItem}>
                                <IconSVG className={styles.createIcon} src={Start}/>
                                <p>Добавьте текст на открытку</p>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.createItem}>
                                <IconSVG className={styles.createIcon} src={Update}/>
                                <p>Сгенерируйте открытку с вашим героем</p>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.createItem}>
                                <IconSVG className={styles.createIcon} src={End}/>
                                <p>Сохраните и поделитесь в социальных сетях</p>
                            </div>
                        </div>
            </div>

            </div>

        </div>
    )
}
