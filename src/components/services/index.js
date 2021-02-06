import React from 'react';
//css
import './services.scss'
//Components
import SectionLayout from '../common/SectionLayout/SectionLayout';
import Tile from './Tile';
import Pyramid from '../common/Pyramid/Pyramid';
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
            title: 'Graphic Design\n' +
                'Pre-Press',
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
            title: 'Print Pre-Press\n' +
                'Management',
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
            title: 'Marketing\n' +
                'Campaign Management',
            text: 'Our framework and guidance uses\n' +
                'proven best practices to crystallize\n' +
                'your strategy so you’ll understand\n' +
                'how to:\n' +
                '•Influence your market and\n' +
                'beat the competition\n' +
                '•Align your messaging and\n' +
                'brand assets to your positioning\n' +
                '•Select the right marketing\n' +
                'mediums\n' +
                ' text and edit me.\n',
        },
        {
            image: image5,
            title: 'User Experience\n' +
                'Design',
            text: '',
        },
        {
            image: image6,
            title: 'User Experience\n' +
                'Workshops',
            text: '',
        },
    ];


    return (
        <div className={'services-container'} id={'SERVICES'}>
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