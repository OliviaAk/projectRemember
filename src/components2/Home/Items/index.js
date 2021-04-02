import React,{useState} from 'react'
import styles from './styles.module.css'
import IconSVG from '../../../components/shared/Icons'
import Solders from '../../../assets/images/solders.jpg'
import Image1 from '../../../assets/images/i1.png'
import Logo from '../../../assets/images/logo.png'

export default function Items() {
  const [hover, isHover]= useState(false)

    return (
        <div className={styles.splitItems}>
          
            <div className={styles.splitItem}>
             <div className={styles.iconItem}>
              <div className={styles.itemHover}></div>
              <IconSVG className={styles.itemImg} src={Image1} />
              </div>
              <div className={styles.splitItemContent}>
                <>
                <h3 className="mt-0 mb-12">
                23 ДНЯ МУЖЕСТВА                  </h3>
                <p className="m-0">
                В Календаре воинской славы «Оборона Могилева: день за  днем» мы остановились 
                на некоторых основных событиях обороны нашего города. Даже из краткой картины обороны,
                 которую мы попытались воссоздать на основе документов и воспоминаний очевидцев, видна особая сила нашего народа.
                 Когда приходит время тяжелых испытаний, рядом с солдатом в строй становятся рабочий, учитель, врач, пенсионер… 
                </p>
                </>
              </div>
              <div >
              </div>
            </div>

            <div className={styles.splitItem}>
              <div className={styles.iconItem}>
              <div className={styles.itemHover}></div>
              <IconSVG className={styles.itemImg} src={Solders}/>
              </div>
              
            <div className={styles.splitItemContentReserve}>
                
                <h3 className="mt-0 mb-12">
                ОНИ СРАЖАЛИСЬ ЗА МОГИЛЕВ
                </h3>
                <p className="m-0">
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
              </div>
            <div className={styles.splitItemContent}>
               
                <h3 className="mt-0 mb-12">
                ДОБАВЬТЕ СВОЕГО ГЕРОЯ                  </h3>
                <p className="m-0">
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
