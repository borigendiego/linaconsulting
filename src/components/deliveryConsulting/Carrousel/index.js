import React from 'react';
//Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//Css

const MyCarousel = () => {
    return(
        <div className={'carousel'}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                showArrows={true}
            >
                <div>
                    <img id={'first'} alt={'first'} />
                </div>
                <div>
                    <img id={'second'} alt={'second'} />
                </div>
                <div>
                    <img id={'third'} alt={'third'}  />
                </div>
                <div>
                    <img id={'fourth'} alt={'fourth'} />
                </div>
                <div>
                    <img id={'fifth'} alt={'fifth'} />
                </div>
                <div>
                    <img id={'sixth'} alt={'sixth'}  />
                </div>
                <div>
                    <img id={'seventh'} alt={'seventh'} />
                </div>
            </Carousel>
        </div>
    )
};

export default MyCarousel;