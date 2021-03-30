import React, { useRef } from 'react';
import Button from '../../components/shared/Button';

import useSlider from '../../hooks/useSlider'
import './Slider.css'
const Slider = ({images}) => {
  
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
          <div className="slider" ref={slideImage}>
            <div className="slider--content">
              <button onClick={goToPreviousSlide} className="slider__btn-left">
                <i className="fas fa-angle-left"></i>
              </button>
             <div className="slider--feature">
                <h1 className="feature--title">Виртуальная стена памяти </h1>
                <p ref={slideText} className="feature--text"></p>
                <div className='slider--buttons'>
                <Button buttonColor='btn-custom'>Архив</Button>
                <Button buttonColor='btn-custom'>Авторизация</Button>
                </div>
              </div>
              <button onClick={goToNextSlide} className="slider__btn-right">
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
        </div>
    );
}

export default Slider;