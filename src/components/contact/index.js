import React from 'react';
//Css
import './contact.scss';
//Components
import Pyramid from '../common/Pyramid/Pyramid';
import Consultation from '../common/Consultation';
//Icons
//Icons
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'

const Contact = () => {
    return(
        <div className={'contact-container'}>
            <Pyramid customClass={'contact-pyramid'}/>
            <div className={'contact-content'}>
                <div>
                    <img src={icon1} alt={icon1} className={'contact-icon'}/>
                    <p className={'contact-text'}>Melbourne, Australia</p>
                </div>
                <div>
                    <img src={icon2} alt={icon2} className={'contact-icon'}/>
                    <p className={'contact-text'}>Monday - Friday<br/>9AM - 5PM</p>
                </div>
                <div>
                    <img src={icon3} alt={icon3} className={'contact-icon'}/>
                    <p className={'contact-text'}>Melbourne, Australia</p>
                </div>
            </div>
            <Consultation />
        </div>
    )
};

export default Contact