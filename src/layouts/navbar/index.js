import React from 'react'
import Button from '../../components/shared/Button'
import IconSVG from '../../components/shared/Icons'
import Logo from '../../assets/images/logo.png'
import styles from './styles.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                
            <div className={styles.logo}>
                    <IconSVG src={Logo}/>
                </div>   
                     <ul className={styles.navLinks}>
                        <li className={styles.active}>Главная</li>
                        <li>Информационные ресурсы</li>
                        <li>Контакты</li>    
                    </ul>
                    <div className={styles.navbarButtons}>
                        <Button>Авторизация</Button>
                    </div>
                </div>
            
            
        </div>
    )
}
