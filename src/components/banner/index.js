import React from 'react';
//Styles
import './banner.scss';
//Components

const Banner = () => {
    return (
        <div className={'banner-container'}>
            <div className={'page-title'}>
                <h1>Lina</h1>
                <h1>Consulting</h1>
            </div>
            <p className={'banner-text'}>
                GRAPHIC DESIGN AND DIGITAL PROJECT
                MANAGEMENT CONSULTING TO DELIVER
                YOUR BUSINESS NEEDS.
            </p>
        </div>
    )
};

export default Banner;