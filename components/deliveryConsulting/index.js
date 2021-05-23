import React from 'react';
//Components
import Pyramid from '../common/Pyramid/Pyramid';
import MyCarousel from './CustomCarrouselSection'
//Css
import styles from './deliveryConsulting.module.scss';
//Constants
import { CAROUSEL_DATA } from './constants';

const DeliveryConsulting = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.pyramid_title}>Delivery Consulting Services</h2>
            <Pyramid customClass={styles.pyramid_overlay} />
            <MyCarousel data={CAROUSEL_DATA} />
        </div>
    )
};

export default DeliveryConsulting;