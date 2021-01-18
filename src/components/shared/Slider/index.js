import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './styles.module.css';
import {responsive, imagesBanner} from '../../../mocks/mainData'
import IconSVG from '../Icons';

const MyCarousel = () => {
    
  
    return (
        <Carousel
        
        showDots={true}
        responsive={responsive} 
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop"]}
        itemClass="carousel-item-padding-40-px"
    
    >
        {
            imagesBanner.map((i)=>{
                return(
                    <div className={styles.item}><IconSVG className={styles.itemImg}  src={i}/></div>

                )
            })
        }
        
      
      </Carousel>
    );
  };
  
  export default MyCarousel;