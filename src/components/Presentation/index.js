import React, { useContext, useEffect , useRef} from 'react';
import Pdf from "react-to-pdf";
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import { Close, Download } from 'assets/icons';
import { IconSVG } from 'components/shared';
import Flag from 'assets/images/flag.png';
import Flag2 from 'assets/images/flag2.png';
import styles from './styles.module.css';

const ref = React.createRef();

const options = {
  orientation: 'landscape',
  unit: 'in',
  format:[9,6]
};

export function  Presentation () {

  const history = useHistory();
  const { clickedCard } = useSelector((state) => state.cardsTape);
  const closeCard = ()=>{
    history.push('/')
  }
  useEffect(()=>{
    if(sessionStorage.reload && clickedCard === null) {
        sessionStorage.reload = "";
        history.push('/card');
    }
  },[])

  return (
    <div className={styles.shadow}>
         
      <div className={styles.modalContainer} ref={ref}>
      <div className={styles.headerButtons} >
            <IconSVG src={Close}  className={styles.closeIcon} handleClickIcon={closeCard} />
            <Pdf targetRef={ref} filename="открыткаВов.pdf" options={options} x={.25} y={.05} scale={1.035} >
        {({ toPdf }) => <IconSVG className={styles.closeIcon} handleClickIcon={toPdf} src={Download}  />}
      </Pdf>
          </div>
      <span className={styles.decorationLeft}>
              <img src={Flag} alt="flag" height="120" />
            </span>
          <div className={styles.modalContent}>
            {
              clickedCard !==null && 
            <div className={styles.card}>
              <div className={styles.left}>
                <Image
                  cloudName="belarus-remember"
                  publicId={clickedCard.image}
                  width="300"
                  height="320"
                  crop="scale"
                />
                <div className={styles.header}>
                  <span>{clickedCard.name}</span>
                  <span>{clickedCard.dateBirth}</span>
                </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.topText}> <div className={styles.line}/>
                  <span> п о м н и м </span> <div className={styles.line}/></div>
                  <span className={styles.description}>{clickedCard.description}</span>
                  <div  className={styles.topText}><div className={styles.line}/><span> г о р д и м с я </span><div className={styles.line}/> </div>

                  </div>
              </div>
            }
          </div>

        
          <span className={styles.decorationRight}>
              <img src={Flag2} alt="flag" height="180" />
            </span>
          </div>
    </div>
  );
};


