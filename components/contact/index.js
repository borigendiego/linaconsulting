import React from 'react';
//Css
import styles from './contact.module.scss';
//Components
import Pyramid from '../common/Pyramid/Pyramid';
import Consultation from '../common/Consultation';
//Icons
import icon1 from '../../public/assets/images/icon1.png';
import icon2 from '../../public/assets/images/icon2.png';

export const contactItem = ( text, source, customClassDiv, customClassImg ) => {
    return (
        <div className={customClassDiv ? `${styles.icons_container} ${customClassDiv}` : `${styles.icons_container}`}>
            <img src={source} alt={source} className={`${styles.icon} ${customClassImg}`} />
            {text}
        </div>
    )
};

const Contact = () => {
    return (
        <div className={styles.container} id={'CONTACT'}>
            <Pyramid customClass={styles.pyramid}/>
            <div className={styles.content}>
                {contactItem(<p className={styles.text}>Melbourne, Australia</p>, icon1)}
                {contactItem(<p className={styles.text}>Monday - Friday<br/>9AM - 5PM</p>, icon2)}
            </div>
            <Consultation />
        </div>
    )
};

export default Contact;