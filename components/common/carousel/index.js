import PropTypes from 'prop-types';
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
import styles from './simpleCarousel.module.scss';
//Icons
import arrow from '../../../public/assets/images/atras.svg';

const Carousel = ({ carouselData }) => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={80}
            totalSlides={6}
            visibleSlides={3}
            className={styles.simpleCarouselContainer}
        >
            <div className={styles.simpleCarouselWrapper}>
                <ButtonBack className={'arrow-button back'}>
                    <img alt={'left-arrow'} src={arrow} />
                </ButtonBack>

                <Slider className={styles.simpleCarousel_slider}>
                    {
                        carouselData.map((item, index) =>
                            <Slide
                                key={item.id}
                                index={index}
                                style={{backgroundImage: `url(${item.image})`}}
                                className={styles.simpleCarouse_slide}
                            >
                                <h4 className={styles.simpleCarouse_slide_title}>{item.title}</h4>
                                <p className={styles.simpleCarouse_slide_text}>{item.text}</p>
                            </Slide>
                        )
                    }
                </Slider>
                <ButtonNext className={'arrow-button next'}>
                    <img alt={'right-arrow'} src={arrow} />
                </ButtonNext>
            </div>
            <DotGroup className={'dots-container'} />
        </CarouselProvider>
    )
}

Carousel.prototypes = {
    carouselData: PropTypes.object,
};

export default Carousel;