import React from 'react';
//Styles
import styles from './banner.module.scss';
//Images
import logo from '../../public/assets/images/logo.png';

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={'page-title'}>
                <div>
                    <img alt={'Lina consulting logo'} src={logo} />
                    <h1>Lina</h1>
                </div>
                <h1>Consulting</h1>
            </div>
            <p className={styles.text}>
                GRAPHIC DESIGN AND DIGITAL PROJECT
                MANAGEMENT CONSULTING TO DELIVER
                YOUR BUSINESS NEEDS.
            </p>
        </div>
    )
};

export default Banner;