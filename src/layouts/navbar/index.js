import React , {useState} from 'react'
import Button from '../../components/shared/Button'
import IconSVG from '../../components/shared/Icons'
import Modal from '../../components/shared/Modal'
import Logo from '../../assets/images/logot.PNG'
import styles from './styles.module.css'
import { Link } from "react-router-dom";


export default function NavBar() {

    const [isOpenModal, setIsOpenModal]= useState(false)

    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                
            <div className={styles.logo}>
                    <IconSVG src={Logo}/>
                </div>   
                     <ul className={styles.navLinks}>
                     <Link to='/heroes' >
                       <li>
                         ГЕРОИ
                       </li>
                    </Link>
                    <Link to='/resources' >
                       <li >
                       ИСТОРИЯ ОБОРОНЫ
                       </li>
                    </Link>
                    <Link to='/contacts' >
                       <li >
                       КАРТА
                       </li>
                    </Link>
                    <Link to='/contacts' >
                       <li >
                       КОНТАКТЫ
                       </li>
                    </Link>
                            
                    </ul>
                    <div className={styles.navbarButtons}>
                        <Button onClick={()=>setIsOpenModal(!isOpenModal)}>Авторизация</Button>
                    </div>
                </div>
        </div>
        <Modal show={isOpenModal} closeModal={()=>setIsOpenModal(!isOpenModal)}/>
        </>
    )
}
