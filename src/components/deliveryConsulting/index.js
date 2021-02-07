import React from 'react';
//Components
import Pyramid from '../common/Pyramid/Pyramid';
import MyCustomCar from './CustomCarrouselSection'
//Css
import './deliveryConsulting.scss';
import MyCarousel from './Carrousel';
//Constants
import { DELIVERY_TEXT } from './constants';

const DeliveryConsulting = () => {
    return(
        <div className={'delivery-container'}>
            <h2 className={'pyramid-title'}>Delivery Consulting Services</h2>
            <Pyramid customClass={'pyramid-overlay'} />
           {/* <div className={'delivery-content-wrapper'}>
                <div className={'carousel-container'}>
                    <MyCarousel />
                </div>
                <div className={'delivery-text-wrapper'}>
                    <h2 className={'delivery-text-title'}>
                        Digital Transformation
                    </h2>
                    <p>{DELIVERY_TEXT}</p>
                </div>
            </div>*/}
            <MyCustomCar />
        </div>
    )
};

export default DeliveryConsulting;