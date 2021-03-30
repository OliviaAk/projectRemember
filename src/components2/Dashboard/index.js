import React from 'react'
import styles from './styles.module.css'
import IconSVG from '../../components/shared/Icons'
import Port from '../../assets/heroes/i1.jpeg';


export default function Dashboard() {
    return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardContent}>
              <div className={styles.dashboardItem}>
                  <div className={styles.portrait}>
                      <IconSVG className={styles.portraitIcon} src={Port}/>
                  </div>
                  <div className={styles.text}>
                      <h4>Федор Алексеевич</h4>
                      <p>02.03.1898 — 22.01.1984</p>
                  </div>
              </div>
              <div className={styles.dashboardItem}>
                 <div className={styles.portrait}>
                      <IconSVG className={styles.portraitIcon} src={Port}/>
                  </div>
                  <div className={styles.text}>
                    <h4>Федор Алексеевич</h4>
                    <p>02.03.1898 — 22.01.1984</p>
                  </div>
              </div>
              <div className={styles.dashboardItem}>
                  <div className={styles.portrait}>
                      <IconSVG className={styles.portraitIcon} src={Port}/>
                  </div>
                  <div className={styles.text}>
                    <h4>Федор Алексеевич</h4>
                    <p>02.03.1898 — 22.01.1984</p>
                  </div>
              </div>
            </div>
        </div>
    </div>
    )
}
