import React from 'react';
//Css
import './about.scss';
//constants
import {ABOUT_TEXT_ONE, ABOUT_TEXT_TWO} from './constants';
//icon
import Consultation from '../common/Consultation';

const About = () => {
    return(
        <div className={'about-section'}>
            <div className={'about-content'}>
                <div className={'logo-title'}>
                    <h1 className={'about-title'}>About</h1>
                    <h2 className={'about-title-one'}>our Company</h2>
                </div>
                <p className={'about-text'}>{ABOUT_TEXT_ONE}</p>
                <h2 className={'about-title-two'}>OUR PHILOSOPHY</h2>
                <p className={'about-text'}>{ABOUT_TEXT_TWO}</p>
            </div>
            <Consultation />
        </div>
    )
};

export default About;