import React from 'react';
//Components
import Pyramid from '../common/Pyramid';
import SectionLayout from '../common/SectionLayout';
import Box from './boxes';
//Css
import './approach.scss';

const Approach = () => {

    const mockData = [
        {
            title: 'Marketing Strategy',
            text: '',
        },
        {
            title: 'Assesment',
            text: 'Our case-specific business\n' +
                'audit and data gathering\n' +
                'provide us with a detailed\n' +
                'and comprehensive picture\n' +
                'of your existing business,\n' +
                'culture and products and\n' +
                'services. Our objective is to\n' +
                'design a marketing strategy,\n' +
                'designs and campaign work\n' +
                'for you.',
        },
        {
            title: 'Recommendations',
            text: '',
        },
        {
            title: 'Implementation',
            text: '',
        },
        {
            title: 'Monitoring',
            text: '',
        },
        {
            title: 'Management',
            text: '',
        },
    ];
    return(
        <div className={'approach-container'}>
            <Pyramid customClass={'approach-pyramid'} />
            <SectionLayout sectionTitle={'Our Approach'} sectionSubTitle={'Our 6 Pillars of a Success Marketing Campaign'} sectionId={'APPROACH'}>
                <div className={'boxes-container'}>
                    {mockData.map((value, index) => <Box boxData={value} />)}
                </div>
            </SectionLayout>
        </div>
    )
};

export default Approach;