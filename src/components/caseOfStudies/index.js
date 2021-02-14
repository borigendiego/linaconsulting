import React from 'react';
//Components
import SectionLayout from '../common/SectionLayout/SectionLayout';
import SimpleCarousel from '../common/carousel';
//Constants
import { CAROUSEL_DATA } from './constants';

const CaseOfStudies = () => {
    return (
        <SectionLayout sectionId={'#CASE'} sectionTitle={'CASE STUDIES'} sectionSubTitle={'Our strategy for your path to success'}>
            <SimpleCarousel carouselData={CAROUSEL_DATA} />
        </SectionLayout>
    )
};

export default CaseOfStudies;