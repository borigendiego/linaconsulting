import React from 'react';
//Components
import Pyramid from '../common/Pyramid';
import SectionLayout from '../common/SectionLayout';
//Css
import './approach.scss';

const Approach = () => {
    return(
        <div className={'approach-container'}>
            <Pyramid customClass={'approach-pyramid'} />
            <SectionLayout sectionTitle={'Our Approach'} sectionSubTitle={'Our 6 Pillars of a Success Marketing Campaign'} sectionId={'APPROACH'}>

            </SectionLayout>
        </div>
    )
};

export default Approach;