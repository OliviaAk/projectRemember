import React,{useState} from 'react'
import styles from './styles.module.css'
import IconSVG from '../../../components/shared/Icons'
import Solders from '../../../assets/images/solders.jpg'
import Image1 from '../../../assets/images/i1.png'
import Logo from '../../../assets/images/logo.png'
import Arrow from '../../../assets/icons/arrow-circle-right-solid.svg'
export default function Items() {
  const [hover, isHover]= useState(false)

    return (
        <div className={styles.splitItems}>
          
            <div className={styles.splitItem}>
             <div className={styles.iconItem}>
              <IconSVG className={styles.itemImg} src={Image1} />
              <div className={styles.mask}></div>
              <div className={styles.content}>
              <p>Перейти к просмотру</p>
              <IconSVG className={styles.icon} src={Arrow}/>
              </div>
              </div>
              <div className={styles.splitItemContent}>
                <h3 className="mt-0 mb-12">
                23 ДНЯ МУЖЕСТВА                  </h3>
                <p className={styles.text}>
                В Календаре воинской славы «Оборона Могилева: день за  днем» мы остановились 
                на некоторых основных событиях обороны нашего города. Даже из краткой картины обороны,
                 которую мы попытались воссоздать на основе документов и воспоминаний очевидцев, видна особая сила нашего народа.
                </p>
              </div>
              <div >
              </div>
            </div>

            <div className={styles.splitItem}>
              <div className={styles.iconItem}>
              <IconSVG className={styles.itemImg} src={Solders}/>
              <div className={styles.mask}></div>
              <div className={styles.content}>
                <p>Перейти к просмотру</p>
                <IconSVG className={styles.icon} src={Arrow}/>

              </div>
              </div>
              
            <div className={styles.splitItemContent}>
                
                <h3 className={styles.textTitle}>
                ОНИ СРАЖАЛИСЬ ЗА МОГИЛЕВ
                </h3>
                <p className={styles.text}>
                Перед вами представлена доска памяти героям обороны Могилева.
                 Она посвящена героям, чьими именами увековечены названия улиц Могилева за стойкость и 
                 героизм которых золотыми буквами вписаны в историю Великой Отечественной войны, в оборону нашего города. 

                  </p>
              </div>
             
            </div>

            <div className={styles.splitItem}>
            <div className={styles.iconItem}>
              <div className={styles.itemHover}></div>
              <IconSVG className={styles.itemImg} src={Logo}/>
              <div className={styles.mask}></div>
              <div className={styles.content}>
              <p>Перейти к просмотру</p>
              <IconSVG className={styles.icon} src={Arrow}/>

              </div>
              </div>
            <div className={styles.splitItemContent}>
               
                <h3 className="mt-0 mb-12">
                ДОБАВЬТЕ СВОЕГО ГЕРОЯ                  </h3>
                <p className={styles.text}>
                Сохраните воспоминания
                о родных — участниках Великой Отечественной войны, 
                создайте видеооткрытку о героях своей семьи!
                Гордость за их подвиги должна жить вечно!
                  </p>
              </div>
             
            </div>
            </div>
    )
}
