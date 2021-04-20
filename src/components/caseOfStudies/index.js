import React from 'react';
//Components
import SectionLayout from '../common/SectionLayout/SectionLayout';
import SimpleCarousel from '../common/carousel';
//Constants
import { CAROUSEL_DATA } from './constants';
//Styles
import './caseOfStudies.scss'
import CaseTile from "./caseTile";

const CaseOfStudies = () => {
    return (
        <SectionLayout sectionId={'CASE'} sectionTitle={'CASE STUDIES'} sectionSubTitle={'Our strategy for your path to success'}>
            <div className={'case-carousel-container'}>
                <SimpleCarousel carouselData={CAROUSEL_DATA} />
            </div>
            <div className={'case-mobile'}>
                { CAROUSEL_DATA.map((value, index) => <CaseTile caseData={value} key={index} />)}
            </div>
        </SectionLayout>
    )
};

export default CaseOfStudies;