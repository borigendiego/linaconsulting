import React from 'react';
import './customCarousel.scss';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import image from '../../../assets/images/about-us-image.jpg'
import arrow from '../../../assets/images/atras.svg'

const CustomCarouselSection = () => {
    return (
        <div className={'carousel-wrapper'}>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={125}
                totalSlides={3}
                class={'carousel-container'}
            >
                <div className={'sliders'}>
                    <ButtonBack
                        className={'arrow-button back'}
                    >
                        <img src={arrow} />
                    </ButtonBack>
                    <Slider
                        className={'slider-wrapper'}
                    >
                        <Slide index={0}><img src={image} /></Slide>
                        <Slide index={1}><img src={image} /></Slide>
                        <Slide index={2}><img src={image} /></Slide>
                    </Slider>
                    <ButtonNext
                        className={'arrow-button next'}
                    >
                        <img src={arrow} />
                    </ButtonNext>
                </div>
                <DotGroup className={'dots-container'} />
            </CarouselProvider>
            <div className={'description-wrapper'}>
                <h2>Title</h2>
                <p>Text</p>
            </div>
        </div>
    )
};

export default CustomCarouselSection