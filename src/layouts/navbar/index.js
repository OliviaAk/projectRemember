import React , {useState} from 'react'
import Button from '../../components/shared/Button'
import IconSVG from '../../components/shared/Icons'
import Modal from '../../components/shared/Modal'
import Logo from '../../assets/images/logot.PNG'
import styles from './styles.module.css'
import { Link } from "react-router-dom";
import Facebook from '../../assets/icons/facebook-brands.svg'
import Vk from '../../assets/icons/vk-brands.svg'
import Google from '../../assets/icons/google-brands.svg'


export default function NavBar() {

    const [isOpenModal, setIsOpenModal]= useState(false)

    const handleFacebookSignin = ()=>{
        window.open(`http://localhost:5000/auth/facebook`,"_self")
    }

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
                    
                            
                    </ul>
                    <div className={styles.navbarButtons}>
                            <IconSVG handleClickIcon={handleFacebookSignin} src={Facebook} className={styles.gitIcon}/>
                            <IconSVG  src={Vk} className={styles.gitIcon}/>
                            <IconSVG  src={Google} className={styles.gitIcon}/>



                    </div>
                </div>
        </div>
        <Modal show={isOpenModal} closeModal={()=>setIsOpenModal(!isOpenModal)}/>
        </>
    )
}
