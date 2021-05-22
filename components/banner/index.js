import React from 'react';
//Styles
import styles from './banner.module.scss';
//Components

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={'page-title'}>
                <h1>Lina</h1>
                <h1>Consulting</h1>
            </div>
            <p className={styles.bannerText}>
                GRAPHIC DESIGN AND DIGITAL PROJECT
                MANAGEMENT CONSULTING TO DELIVER
                YOUR BUSINESS NEEDS.
            </p>
        </div>
    )
};

export default Banner;