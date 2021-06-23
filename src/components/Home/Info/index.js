import React from 'react';
import BackgroundSlider from 'react-background-slider';
import styles from './styles.module.css';
import { Slide } from '../../shared';
import Pic1 from '../../../assets/images/pic2.jpg';
import Pic2 from '../../../assets/images/pic1.jpg';
import Pic3 from '../../../assets/images/pic3.jpg';

export default function Info() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      id: 1,
      title: 'Узнайте об истории обороны Могилева!',
    },
    {
      id: 2,
      title: 'О героях войны 1941-1945 годов и их подвигах!',
    },
    {
      id: 3,
      title:
        'Сохраните воспоминания о родных - участниках обороны Могилева, чтобы память о них жила вечно!',
    },
  ];
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles.home}>
      <BackgroundSlider images={[Pic1, Pic2, Pic3]} duration={3.5} transition={0.5} />
      <div className={styles.homeOverlay}>
        <div className={styles.homeContainer}>
          <div className={styles.homeMain}>
            <p className={styles.homeMainTitle}>
              Виртуальная стена памяти героев обороны Могилева
            </p>
            <div className={styles.homeCarusel}>
              <Slide image={slides[currentSlide]} />
            </div>

            {/* <div className={styles.readBtn}>
            <Button buttonColor='primary-btn2'>Архив</Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
