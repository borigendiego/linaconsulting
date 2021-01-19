import React from 'react';
//css
import './services.scss'
//Components
import SectionLayout from '../common/SectionLayout';
import Tile from './Tile';
import Pyramid from '../common/Pyramid';
//Images
import image1 from '../../assets/images/services1.jpg';
import image2 from '../../assets/images/services2.jpg';
import image3 from '../../assets/images/services3.jpeg';

const Services = () => {

    const mockData = [
        {
            image: '',
            title: 'Graphic Design and\n' +
                'Marketing Campaigns',
        },
        {
            image: '',
            title: 'Graphic Design\n' +
                'Pre-Press',
        },
        {
            image: '',
            title: 'Print Pre-Press\n' +
                'Management',
        },
        {
            image: '',
            title: 'Marketing\n' +
                'Campaign Management',
        },
        {
            image: '',
            title: 'User Experience\n' +
                'Design',
        },
        {
            image: '',
            title: 'User Experience\n' +
                'Workshops',
        },
    ];


    return(
        <div className={'services-container'}>
            <Pyramid title={'Welcome to Lina Consulting'} text={'Lina Consulting is a full-service consulting agency' +
            ' based in Melbourne. We apply graphic design and Digital Project Management solutions to enhance your' +
            ' small, medium or corporate business. We will help you define your strategic goals from idea, desing,' +
            ' Pre-Press and project management and then deliver these within agreed budget and timescales'} />
            <SectionLayout sectionTitle={'Our Services'} sectionSubTitle={'Design & Marketing Services:'} sectionId={'SERVICES'}>
                <div className={'tile-container'}>
                    {mockData.map((value, index) => <Tile tileData={value} key={index} />)}
                </div>
            </SectionLayout>
        </div>
    )

};

export default Services;