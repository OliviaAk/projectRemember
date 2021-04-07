import React from 'react'
import IconSVG from '../../../components/shared/Icons'
import styles from './styles.module.css'
import Video from '../../../assets/images/download.png'

export default function About() {
    return (
       <div className={styles.homeTop}>
       <div className={styles.homeContainer}>
       <IconSVG className={styles.video} src={Video}  />

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
    </div>
    </div>

            
    )
}