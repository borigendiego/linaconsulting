import React from 'react';
import { Link } from 'react-router-dom';
//css
import './consultation.scss'


const Consultation = () => {
    return(
        <div className={'consultation-container'}>
            <div className={'consultation-content'}>
                <p className={'consultation-text'}>Get a free Consultation</p>
                <Link to={'/contact'} className={'link-consultation'}>
                    <p style={{textAlign: 'center'}}>Apply Now</p>
                </Link>
            </div>
        </div>
    )
};

export default Consultation;