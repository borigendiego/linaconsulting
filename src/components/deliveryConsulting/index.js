import React from 'react';
//Components
import Pyramid from '../common/Pyramid/Pyramid';
import MyCarousel from './CustomCarrouselSection'
//Css
import './deliveryConsulting.scss';
//Constants
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
        paragraph: 'Improving business processes, people behaviours and new information technology and systems has enabled the digital transformations across multiple organisations. This wealth of experience in different industries has given us the ability to be adaptable and flexible to cause and manage disruption to deal with exponential changes in technology.'
    },
    {
        id: 2,
        image: image2,
        title: 'Business Process Re-Engineering',
        paragraph: 'String consultative solution selling skills, supported by capacity to increase business growth and improve organisational performance through Business Process Improvement and Change Management efficiently and effectively'
    },
    {
        id: 3,
        image: image3,
        title: 'Project Management',
        paragraph: 'With over 20 years of Project Management experience, Lina Consulting can deliver projects across a variety of Marketing Campaigns including physical and online/digital media. Certified in PRINCE2 Project Management provides world class delivery',
    },
    {
        id: 4,
        image: image4,
        title: 'Benefits/Value Realisation',
        paragraph: 'High level analytical and problem-solving skills with proven ability to maximise performance outcomes and consistently exceed expectations and targets'
    },
    {
        id: 5,
        image: image5,
        title: 'Program/Portfolio Management',
        paragraph: 'With over two decades of experience in transforming organisations and managing portfolios and programs in industries such as financial services, telecommunications, local government, defence and utilities'
    },
];

const DeliveryConsulting = () => {
    return(
        <div className={'delivery-container'}>
            <h2 className={'pyramid-title py-title'}>Delivery Consulting Services</h2>
            <Pyramid customClass={'pyramid-overlay'} />
            <MyCarousel data={DATA} />
        </div>
    )
};

export default DeliveryConsulting;