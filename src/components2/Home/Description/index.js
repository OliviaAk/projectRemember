import React from 'react'

import styles from './styles.module.css'
import IconSVG from '../../../components/shared/Icons'

import Start from '../../../assets/images/photo.png'
import Update from '../../../assets/images/update.png'
import End from '../../../assets/images/star.png'

export default function Home() {
    return (
     <div className={styles.home}>
        <div className={styles.homeContainer}>
         <div className={styles.homeInfo} >
            <div className={styles.createContent}>
              <p>СОЗДАЙТЕ ОТКРЫТКУ</p>
            </div>
                        <div className={styles.createInfo}>
                            <div className={styles.createItem}>
                                <div className={styles.createIcon}>
                                <IconSVG className={styles.icon} src={Start}/>
                                </div>
                                <div className={styles.createText}>Добавьте текст на открытку</div>
                            </div>
                            <div className={styles.createItem}>
                            <div className={styles.createIcon}>
                                <IconSVG className={styles.icon} src={Update}/>
                                </div>
                            <div className={styles.createText}>Добавьте текст на открытку</div>
                            </div>
                            <div className={styles.createItem}>
                            <div className={styles.createIcon}>
                                <IconSVG className={styles.icon} src={End}/>
                                </div>
                             <div className={styles.createText}>Добавьте текст на открытку</div>
                            </div>
                        </div>
          </div>

        </div>

        </div>
    )
}
