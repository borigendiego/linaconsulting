import React from 'react';
//Css
import './contactPage.scss';
//components
import Form from './Form';
import { contactItem } from '../contact';
//images
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';

const ContactP = () => {
    return (
        <div className={'contact-page'}>
            <div className={'contact-page-content'}>
                <div className={'contact-logo-title'}>
                    <h1 className={'contact-title'}>Get</h1>
                    <h1 className={'contact-title-one'}>in touch</h1>
                </div>
                <div className={'icons-text'}>
                    {contactItem(<p className={'contact-page-text'}>Melbourne, Australia</p>, icon1, 'contact-page-item', 'contact-page-img')}
                    {contactItem(<p className={'contact-page-text'}>Monday - Friday<br/>9AM - 5PM</p>, icon2, 'contact-page-item', 'contact-page-img')}
                    {contactItem(<p className={'contact-page-text'}>Melbourne, Australia</p>, icon3, 'contact-page-item', 'contact-page-img')}
                </div>
            </div>
            <Form />
        </div>
    )
};

export default ContactP;