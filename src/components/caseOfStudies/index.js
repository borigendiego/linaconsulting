import React from 'react';
//Styles
import './caseOfStudies.scss';
//Components
import SimpleCarousel from '../common/carousel';
//Constants
import { CAROUSEL_DATA } from './constants';

const CaseOfStudies = () => {
    return (
        <div className={'cos-wrapper'}>
            <h2>CASE STUDIES</h2>
            <h3>Our strategy for your path to success</h3>
            <SimpleCarousel carouselData={CAROUSEL_DATA} />
        </div>
    )
};

export default CaseOfStudies;