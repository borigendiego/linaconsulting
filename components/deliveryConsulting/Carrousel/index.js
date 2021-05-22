import React from 'react';
//Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//Css
import './carousel.scss';
//Images
import image1 from '../../../assets/images/consulting/deliveryServices1.jpg';
import image2 from '../../../assets/images/consulting/deliveryServices2.jpg';
import image3 from '../../../assets/images/consulting/deliveryServices3.jpg';
import image4 from '../../../assets/images/consulting/deliveryServices4.jpg';
import image5 from '../../../assets/images/consulting/deliveryServices5.jpg';
import image6 from '../../../assets/images/consulting/deliveryServices6.jpeg';
import image7 from '../../../assets/images/consulting/deliveryServices7.png';

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
                    <img src={image1} id={'first'} alt={'first'} className={'carousel-image'}/>
                </div>
                <div>
                    <img src={image2} id={'second'} alt={'second'} className={'carousel-image'} />
                </div>
                <div>
                    <img src={image3} id={'third'} alt={'third'} className={'carousel-image'} />
                </div>
                <div>
                    <img src={image4} id={'fourth'} alt={'fourth'} className={'carousel-image'} />
                </div>
                <div>
                    <img src={image5} id={'fifth'} alt={'fifth'} className={'carousel-image'} />
                </div>
                <div>
                    <img src={image6} id={'sixth'} alt={'sixth'} className={'carousel-image'} />
                </div>
                <div>
                    <img src={image7} id={'seventh'} alt={'seventh'} className={'carousel-image'} />
                </div>
            </Carousel>
        </div>
    )
};

export default MyCarousel;