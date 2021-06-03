import React from 'react';
//css
import styles from './contactPage.module.scss';
//components
import Form from './Form';
import { contactItem } from '../contact';
//images
import locationIcon from '../../public/assets/images/icon1.png';
import clock from '../../public/assets/images/icon2.png';

const ContactP = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.logo_title}>
                    <h1 className={styles.title}>Get</h1>
                    <h1 className={styles.title_one}>in touch</h1>
                </div>
                <div className={styles.icons_text}>
                    {contactItem(<p className={styles.text}>Melbourne, Australia</p>, locationIcon, 'contact-page-item', 'contact-page-img')}
                    {contactItem(<p className={styles.text}>Monday - Friday<br/>9AM - 5PM</p>, clock, 'contact-page-item', 'contact-page-img')}
                </div>
            </div>
            <Form />
            <div className={styles.overlay}>
                <div className={styles.yellow_figure} />
                <div className={styles.blue_line} />
            </div>
        </div>
    )
};

export default ContactP;