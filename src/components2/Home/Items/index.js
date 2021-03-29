import React from 'react'
import styles from './styles.module.css'
import IconSVG from '../../../components/shared/Icons'
import Solders from '../../../assets/images/solders.jpg'
import Image1 from '../../../assets/images/i1.png'
import Logo from '../../../assets/images/logo.png'

export default function Items() {
    return (
        <div className={styles.splitItems}>
            <div className={styles.splitItem}>
              <div className={styles.splitItemContent}>
                <h3 className="mt-0 mb-12">
                23 ДНЯ МУЖЕСТВА                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div >
                <IconSVG className={styles.itemImg} src={Image1}/>
              </div>
            </div>

            <div className={styles.splitItem}>
            <div  >
              <IconSVG className={styles.itemImg} src={Solders}/>

              </div>
            <div className={styles.splitItemContentReserve}>
                
                <h3 className="mt-0 mb-12">
                ОНИ СРАЖАЛИСЬ ЗА МОГИЛЕВ                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
             
            </div>

            <div className={styles.splitItem}>
            <div className={styles.splitItemContent}>
               
                <h3 className="mt-0 mb-12">
                ДОБАВЬТЕ СВОЕГО ГЕРОЯ                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div >
                <IconSVG className={styles.itemImg} src={Logo}/>

              </div>
            </div>
            </div>
    )
}
