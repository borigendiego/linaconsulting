import React from 'react';
//css
import './services.module.scss'
//Components
import SectionLayout from '../common/SectionLayout/SectionLayout';
import Tile from './Tile';
import Pyramid from '../common/Pyramid/Pyramid';
import MobileCarousel from '../common/mobileCarousel';
//Constants
import { SERVICES_TEXT } from './constants';
//Images
import image1 from '../../public/assets/images/services1.jpg';
import image2 from '../../public/assets/images/services3.jpg';
import image3 from '../../public/assets/images/services3.jpg';
import image4 from '../../public/assets/images/services4.jpg';
import image5 from '../../public/assets/images/services5.jpg';
import image6 from '../../public/assets/images/services6.jpg';

const Services = () => {
    const mockData = [
        {
            image: image1,
            title: 'Graphic Design and Marketing Campaigns',
            text: 'In today’s digital marketplace,\n' +
                'small companies have the ability\n' +
                'to win mindshare and influence\n' +
                'their market through their\n' +
                'websites, apps and social media.\n' +
                'Lina Consulting provides you\n' +
                'with the framework and tools,\n' +
                'delivered with a fresh, outside\n' +
                'perspective, to craft a succinct,\n' +
                'long-term strategy that will fuel\n' +
                'your growth for 5 to 10 years.',
        },
        {
            image: image2,
            title: 'Graphic Design Pre-Press',
            text: 'Sourcing printers,\n' +
                'managing PDFs and colour\n' +
                'proofs, press checking,\n' +
                'organising delivery...\n' +
                'the print management\n' +
                'process can be time-consuming and\n' +
                'complicated. ',
        },
        {
            image: image3,
            title: 'Print Pre-Press Management',
            text: 'Lina Consulting offers a full\n' +
                'pre-press print consultation\n' +
                'and management service to\n' +
                'make your life easier.\n' +
                'We partner with industry-leading production houses\n' +
                'and printers to ensure your\n' +
                'project is printed on time and\n' +
                'to the highest quality\n' +
                'standards.\n',
        },
        {
            image: image4,
            title: 'Marketing Campaign Management',
            text: 'Our framework and guidance uses proven best practices to crystallize your strategy so you’ll understand how to: Influence your market and beat the competition, align your messaging and brand assets to your positioning and Select the right marketing mediums text and edit me.',
        },
        {
            image: image5,
            title: 'UI/UX (User Interface / Experience)',
            text: 'In Lina Consulting with are focus on create customized products that makes your business unique and different',
        },
        {
            image: image6,
            title: 'User Experience Workshops',
            text: 'Achieve the best possible user experience for the client through the collaboration with you',
        },
    ];

    return (
        <div className={'services-container'} id={'SERVICES'}>
            <Pyramid>
                <h2 className={'pyramid-title'}>Welcome to Lina Consulting</h2>
                <p className={'pyramid-text'}>{SERVICES_TEXT}</p>
            </Pyramid>
            <SectionLayout
                sectionTitle={'Our Services'}
                sectionSubTitle={'Design & Marketing Services:'}
                sectionId={'SERVICES'}
                layoutWidth={'lg'}
            >
                <div className={'tile-container'}>
                    {mockData.map((value, index) => <Tile tileData={value} key={index} />)}
                </div>
                <MobileCarousel slides={mockData.map((value, index) => <Tile tileData={value} key={index} />)} />
            </SectionLayout>
        </div>
    )
};

export default Services;