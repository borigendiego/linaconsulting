import React from 'react';
//Css
import styles from './about.module.scss';
//constants
import { ABOUT_TEXT_ONE, ABOUT_TEXT_TWO } from './constants';
//icon
import Consultation from '../common/Consultation';
import logo from '../../public/assets/images/logo.png';

const About = () => {
    return(
        <div className={styles.section}>
            <div className={styles.text_container}>
                <div className={`page-title ${styles.title}`}>
                    <div>
                        <img alt={'Lina consulting logo'} src={logo} />
                        <h1>About</h1>
                    </div>
                    <h1>our Company</h1>
                </div>
                <p className={styles.text}>{ABOUT_TEXT_ONE}</p>
                <h2 className={styles.title_two}>OUR PHILOSOPHY</h2>
                <p className={styles.text}>{ABOUT_TEXT_TWO}</p>
            </div>
            <Consultation />
        </div>
    )
};

export default About;