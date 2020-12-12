import React from 'react'
import Button from '../../shared/Button'
import styles from './styles.module.css'
export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <div className={styles.homeContent}>
                    <div className={styles.homeContainerTitle}>  
                    <div className={styles.title}>
                    Что б память жила....
                    </div>
                <div className={styles.description}>
                                    Яркой легендарной страницей вошла в историю Великой Отечественной войны (1941 – 1945 гг.)
                    оборона Могилева. Здесь, у стен древнего города, впервые в той войне, были остановлены 
                    двигавшиеся на восток танковые части вермахта. Только за один день боев на Буйничском поле,
                    нашими воинами было подбито и сожжено 39 немецких танков и бронемашин. 23 дня и ночи, с 3 по 26 июля 1941 года,
                    продолжалась эта битва. Наравне с героями Брестской крепо-сти и Минска защитники Могилева показали образцы героизма и мужества.
                     К сожалению, не многим из них удалось выйти из окружения, большинство погибло, было ранено или попало в плен…
                </div>
                </div>
                <div className={styles.homeContentVideo}>

                </div>

                </div>
                </div>
     </div>
    )
}
