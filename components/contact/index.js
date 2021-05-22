import React from 'react';
//Css
import './contact.module.scss';
//Components
import Pyramid from '../common/Pyramid/Pyramid';
import Consultation from '../common/Consultation';
//Icons
import icon1 from '../../public/assets/images/icon1.png';
import icon2 from '../../public/assets/images/icon2.png';

export const contactItem = ( text, source, customClassDiv, customClassImg ) => {
    return (
        <div className={customClassDiv ? `contact-icons_container ${customClassDiv}` : 'contact-icons_container'}>
            <img src={source} alt={source} className={`contact-icon ${customClassImg}`} />
            {text}
        </div>
    )
};

const Contact = () => {
    return (
        <div className={'contact-container'} id={'CONTACT'}>
            <Pyramid customClass={'contact-pyramid'}/>
            <div className={'contact-content'}>
                {contactItem(<p className={'contact-text'}>Melbourne, Australia</p>, icon1)}
                {contactItem(<p className={'contact-text'}>Monday - Friday<br/>9AM - 5PM</p>, icon2)}
            </div>
            <Consultation />
        </div>
    )
};

export default Contact;