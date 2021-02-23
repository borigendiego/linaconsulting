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
import './customCarousel.scss';
//Icon
import arrow from '../../../assets/images/atras.svg'

const CustomCarouselSection = ({ data }) => {
    const [currentItem, setCurrentItem] = useState(0);

    return (
        <div className={'carousel-wrapper'}>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={125}
                totalSlides={data.length}
                className={'carousel-container'}
            >
                <div className={'sliders'}>
                    <ButtonBack
                        className={'arrow-button back'}
                        onClick={() => setCurrentItem(currentItem - 1)}
                    >
                        <img alt={'back-arrow'} src={arrow} />
                    </ButtonBack>
                    <Slider
                        className={'slider-wrapper'}
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
                        className={'arrow-button next'}
                        onClick={() => setCurrentItem(currentItem + 1)}
                    >
                        <img alt={'next-arrow'} src={arrow} />
                    </ButtonNext>
                </div>
                <DotGroup className={'dots-container'} />
            </CarouselProvider>
            <div className={'description-wrapper'}>
                <h2>{data[currentItem].title}</h2>
                <p>{data[currentItem].paragraph}</p>
            </div>
        </div>
    )
};

export default CustomCarouselSection