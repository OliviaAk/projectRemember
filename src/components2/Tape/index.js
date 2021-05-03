import React,{useState, useEffect, useRef} from 'react'
import styles from './styles.module.css';
import {getPublishCards} from '../../store2/thunks';
import {useDispatch, useSelector} from 'react-redux'
import Item from './Item'
import Rigth from '../../assets/icons/chevron-right-solid.svg'
import Left from '../../assets/icons/chevron-left-solid.svg'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import IconSVG from '../../components/shared/Icons';

export default function Tape() {
    const dispatch = useDispatch();
    const { publishCards } = useSelector((state) => state.cardsTape);

  
    useEffect(()=>{
        dispatch(getPublishCards())
    },[])


    
    return (
        <div className={styles.tape}>
            <div className={styles.tapeContainer}>
            <ScrollMenu
      arrowLeft={<IconSVG src={Left} className={styles.arrow}/>}
      arrowRight={<IconSVG src={Rigth} className={styles.arrow}/>}
      data= {publishCards.map((card, index) => (
        <Item
        name={card.name}
        image={card.image}
        user={card.userId}
        btn='Открыть'
        />
    ))}
    />
            </div>
            
        </div>
    )
}
