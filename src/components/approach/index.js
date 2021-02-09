import React from 'react';
//Components
import SectionLayout from '../common/SectionLayout/SectionLayout';
import Box from './boxes';
//Css
import './approach.scss';
//Images
import image1 from '../../assets/images/approach1.jpeg'
import image2 from '../../assets/images/approach1.jpeg'
import image3 from '../../assets/images/approach3.jpeg'
import image4 from '../../assets/images/approach4.jpg'
import image5 from '../../assets/images/approach5.jpeg'
import image6 from '../../assets/images/approach6.jpeg'

const Approach = () => {

    const mockData = [
        {
            title: 'Marketing Strategy',
            text: '',
            backgroundImage: image1,
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
            backgroundImage: image2,
        },
        {
            title: 'Recommendations',
            text: '',
            backgroundImage: image3,
        },
        {
            title: 'Implementation',
            text: '',
            backgroundImage: image4,
        },
        {
            title: 'Monitoring',
            text: '',
            backgroundImage: image5,
        },
        {
            title: 'Management',
            text: '',
            backgroundImage: image6,
        },
    ];
    return(
        <div className={'approach-container'} id={'APPROACH'}>
            <SectionLayout sectionTitle={'Our Approach'} sectionSubTitle={'Our 6 Pillars of a Success Marketing Campaign'} sectionId={'APPROACH'}>
                <div className={'boxes-container'}>
                    {mockData.map((value, index) => <Box key={value.title} boxData={value} />)}
                </div>
            </SectionLayout>
        </div>
    )
};

export default Approach;