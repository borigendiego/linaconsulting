import React from 'react';
//Components
import Pyramid from '../common/Pyramid/Pyramid';
import MyCustomCar from './CustomCarrouselSection'
//Css
import './deliveryConsulting.scss';
import MyCarousel from './Carrousel';
//Constants
import { DELIVERY_TEXT } from './constants';
import image1 from '../../assets/images/consulting/deliveryServices1.jpg'
import image2 from '../../assets/images/consulting/deliveryServices2.jpg'
import image3 from '../../assets/images/consulting/deliveryServices3.jpg'
import image4 from '../../assets/images/consulting/deliveryServices4.jpg'
import image5 from '../../assets/images/consulting/deliveryServices5.jpg'


const DATA = [
    {
        id: 1,
      image: image1,
      title: 'Digital Transformation',
      paragraph: 'Improving business processes, people behaviours and\n' +
          'new information technology and systems has enabled the\n' +
          'digital transformations across multiple organisations. This\n' +
          'wealth of experience in different industries has given us\n' +
          'the ability to be adaptable and exible to cause and\n' +
          'manage disruption to deal with exponential changes in\n' +
          'technology.'

    },
    {
        id: 2,
        image: image2,
        title: 'Website build and maintain services',
        paragraph: 'Texto 2'
    },
    {
        id: 3,
        image: image3,
        title: 'Project Management',
        paragraph: 'With over 20 years of Project Management\n' +
            'experience, Lina Consulting can deliver projects\n' +
            'across a variety of Marketing Campaigns including\n' +
            'physical and online/digital media. Certified in\n' +
            'PRINCE2 Project Management provides world\n' +
            'class delivery.\n' +
            'We provide a broad range of project management\n' +
            'expertise from ideation to release by leading a team\n' +
            'through changes in e-Commerce, Digital, ERP,\n' +
            'CRM processes and IT systems. With formal\n' +
            'qualifications; and practical experience in project\n' +
            'management disciplines such as PRINCE2, SAFe\n' +
            'and Agile/Scrum to ensure quality control and\n' +
            'alignment to organisational strategy.\n' +
            'Our consultants can demonstrate success in\n' +
            'developing and fostering long-term internal and\n' +
            'external stakeholder relationships. With welldeveloped\n' +
            'communication and negotiation skills, we\n' +
            'regularly prepare and present detailed\n' +
            'presentations to senior management on strategies,\n' +
            'plans, requirements and benefits by providing the\n' +
            'What, Why, Who, When, How and How Much for\n' +
            'solution options for business and customer\n' +
            'challenges. This allows senior management to\n' +
            'make informed decisions based on qualitative and\n' +
            'quantitative information.'
    },
    {
        id: 4,
        image: image4,
        title: 'Website build and maintain services',
        paragraph: 'Texto 4'
    },
];

const DeliveryConsulting = () => {
    return(
        <div className={'delivery-container'}>
            <h2 className={'pyramid-title py-title'}>Delivery Consulting Services</h2>
            <Pyramid customClass={'pyramid-overlay'} />
            <MyCustomCar data={DATA} />
        </div>
    )
};

export default DeliveryConsulting;