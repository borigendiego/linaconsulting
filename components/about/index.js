import React from 'react';
//Css
import styles from './about.module.scss';
//constants
import { ABOUT_TEXT_ONE, ABOUT_TEXT_TWO } from './constants';
//icon
import Consultation from '../common/Consultation';

const About = () => {
    return(
        <div className={styles.aboutSection}>
            <div className={styles.aboutText_container}>
                <div className={'about-title'}>
                    <h1>About</h1>
                    <h1>our Company</h1>
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