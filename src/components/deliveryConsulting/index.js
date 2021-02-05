import React from 'react';
//Components
import Pyramid from '../common/Pyramid/Pyramid';
//Css
import './deliveryConsulting.scss';
import MyCarousel from './Carrousel';
//Constants
import { DELIVERY_TEXT } from './constants';

const DeliveryConsulting = () => {
    return(
        <div className={'delivery-container'}>
            <Pyramid customClass={'delivery-pyramid'}>
                <h2 className={'pyramid-title'}>Delivery Consulting Services</h2>
            </Pyramid>
            <div className={'delivery-content-wrapper'}>
                <div className={'carousel-container'}>
                    <MyCarousel />
                </div>
                <div className={'delivery-text-wrapper'}>
                    <h2 className={'delivery-text-title'}>
                        Digital Transformation
                    </h2>
                    <p>{DELIVERY_TEXT}</p>
                </div>
            </div>
        </div>
    )
};

export default DeliveryConsulting;