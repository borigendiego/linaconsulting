import React, { useState } from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
//Styles
import styles from './customCarousel.module.scss';
//Icon
import arrow from '../../../public/assets/images/atras.svg';

const CustomCarouselSection = ({ data }) => {
    const [currentItem, setCurrentItem] = useState(0);

    return (
        <div className={styles.carousel_wrapper}>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={125}
                totalSlides={data.length}
                className={styles.carousel_container}
            >
                <div className={styles.sliders}>
                    <ButtonBack
                        className={`${styles.arrow_button} ${styles}`}
                        onClick={() => setCurrentItem(currentItem - 1)}
                    >
                        <img alt={'back-arrow'} src={arrow} />
                    </ButtonBack>
                    <Slider
                        className={styles.slider_wrapper}
                    >
                        {
                            data.map((item, index) =>
                                <Slide key={item.id} index={index}>
                                    <img alt={item.title} src={item.image} />
                                </Slide>
                            )
                        }
                    </Slider>
                    <ButtonNext
                        className={`${styles.arrow_button} ${styles.next}`}
                        onClick={() => setCurrentItem(currentItem + 1)}
                    >
                        <img alt={'next-arrow'} src={arrow} />
                    </ButtonNext>
                </div>
                <DotGroup className={styles.dots_container} />
            </CarouselProvider>
            <div className={styles.description_wrapper}>
                <h2>{data[currentItem].title}</h2>
                <p>{data[currentItem].paragraph}</p>
            </div>
        </div>
    )
};

export default CustomCarouselSection