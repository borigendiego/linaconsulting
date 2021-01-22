import React from 'react';
//css
import './services.scss'
//Components
import SectionLayout from '../common/SectionLayout';
import Tile from './Tile';
import Pyramid from '../common/Pyramid';
//Constants
import { SERVICES_TEXT } from './constants';
//Images
import image1 from '../../assets/images/services1.jpg'
import image2 from '../../assets/images/services3.jpg'
import image3 from '../../assets/images/services3.jpg'
import image4 from '../../assets/images/services4.jpg'
import image5 from '../../assets/images/services5.jpg'
import image6 from '../../assets/images/services6.jpg'
const Services = () => {

    const mockData = [
        {
            image: image1,
            title: 'Graphic Design and\n' +
                'Marketing Campaigns',
        },
        {
            image: image2,
            title: 'Graphic Design\n' +
                'Pre-Press',
        },
        {
            image: image3,
            title: 'Print Pre-Press\n' +
                'Management',
        },
        {
            image: image4,
            title: 'Marketing\n' +
                'Campaign Management',
        },
        {
            image: image5,
            title: 'User Experience\n' +
                'Design',
        },
        {
            image: image6,
            title: 'User Experience\n' +
                'Workshops',
        },
    ];


    return (
        <div className={'services-container'}>
            <Pyramid>
                <h2 className={'pyramid-title'}>Welcome to Lina Consulting</h2>
                <p className={'pyramid-text'}>{SERVICES_TEXT}</p>
            </Pyramid>
            <SectionLayout sectionTitle={'Our Services'} sectionSubTitle={'Design & Marketing Services:'} sectionId={'SERVICES'}>
                <div className={'tile-container'}>
                    {mockData.map((value, index) => <Tile tileData={value} key={index} />)}
                </div>
            </SectionLayout>
        </div>
    )
};

export default Services;